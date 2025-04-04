import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import DrawingTools from './DrawingTools';
import html2canvas from 'html2canvas';
import styles from './index.module.css';
import faceStyles from './FaceCubeDrawer3x3.module.css';
import Colors3x3 from './Colors3x3';
import Cube from './Cube';

function CubeSquare({cube, face, index, handleClick}: { cube: Cube; face: string; index: number; handleClick: (face: string, index: number) => void }) {
  return (
    <button
      key={index}
      onClick={() => handleClick(face, index)}
      className={clsx(styles['c-piece'], styles['c-piece--side'], styles[`p-${cube.getSquare(face, index)}`])}
    ></button>
  );
}

function CubeFace({ cube, handleClick }: { cube: Cube; handleClick: (face: string, index: number) => void }) {
  return (
    <>
      {/* line 1 */}
      <div></div>
      <CubeSquare cube={cube} face="back" index={2} handleClick={handleClick} />
      <CubeSquare cube={cube} face="back" index={1} handleClick={handleClick} />
      <CubeSquare cube={cube} face="back" index={0} handleClick={handleClick} />
      <div></div>

      {/* line 2 */}
      <CubeSquare cube={cube} face="left"  index={0} handleClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={0} handleClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={1} handleClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={2} handleClick={handleClick} />
      <CubeSquare cube={cube} face="right" index={0} handleClick={handleClick} />

      {/* line 3 */}
      <CubeSquare cube={cube} face="left"  index={1} handleClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={3} handleClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={4} handleClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={5} handleClick={handleClick} />
      <CubeSquare cube={cube} face="right" index={1} handleClick={handleClick} />

      {/* line 4 */}
      <CubeSquare cube={cube} face="left"  index={2} handleClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={6} handleClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={7} handleClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={8} handleClick={handleClick} />
      <CubeSquare cube={cube} face="right" index={2} handleClick={handleClick} />

      {/* line 5 */}
      <div></div>
      <CubeSquare cube={cube} face="front"   index={0} handleClick={handleClick} />
      <CubeSquare cube={cube} face="front"   index={1} handleClick={handleClick} />
      <CubeSquare cube={cube} face="front"   index={2} handleClick={handleClick} />
      <div></div>
    </>
  );
}

export default function FaceCubeDrawer3x3() : ReactNode {
  const [activeColor, setActiveColor] = useState(Colors3x3.colors[0]);
  const defaultCube = new Cube('GGGGyGGGG GGG GGG GGG GGG');
  const [cube, setCube] = useState(defaultCube.clone());

  const handleClick = (face: string, index: number) => {
    const newCube = cube.clone();
    newCube.setSquare(face, index, activeColor);
    setCube(newCube)
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newCube = new Cube(value);
    setCube(newCube.clone());
  };

  const handleReset = () => {
    setCube(defaultCube.clone());
  };

  const handleErase = () => {
    setCube(new Cube('GGGGGGGGG GGG GGG GGG GGG'));
  }

  const handleDownload = () => {
    const element = document.getElementById('face-cube');
    if (!element) return;

    html2canvas(element, { backgroundColor: null }).then(canvas => {
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'face-cube.png';
      // Trigger the download by programmatically clicking the link
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(err => {
      console.error('Error capturing the element', err);
    });
  }

  return (
    <>
      <DrawingTools
        activeColor={activeColor}
        colors={Colors3x3.colors}
        onChange={setActiveColor}
        onInputChange={handleInputChange}
        inputValue={cube.getTopViewWithSidesDescription()}
        onReset={handleReset}
        onErase={handleErase}
        onDownload={handleDownload}
      />

      <div id="face-cube" className={clsx(styles['drawing-zone'], faceStyles['face-cube'])}>
        <CubeFace cube={cube} handleClick={handleClick} />
      </div>
    </>
  );
}
