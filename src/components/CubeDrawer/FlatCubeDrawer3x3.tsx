import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import html2canvas from 'html2canvas';
import styles from './index.module.css';
import flatStyles from './FlatCubeDrawer3x3.module.css';
import DrawingTools from './DrawingTools';
import Cube from './Cube';
import Colors3x3 from './Colors3x3';

function CubeFace({ cube, face, handleClick }: { cube: Cube; face: string; handleClick: (row: string, index: number) => void }) {
  return (
    <div className={styles['c-face']}>
      {cube.faceColors(face).map((color, index) => (
        <button
          key={index}
          onClick={() => handleClick(face, index)}
          className={clsx(styles['c-piece'], styles[`p-${color}`])}
        ></button>
      ))}
    </div>
  );
}

export default function FlatCubeDrawer3x3() : ReactNode {
  const defaultCube = new Cube('GGGGwGGGG GGGGyGGGG GGGGgGGGG GGGGrGGGG GGGGbGGGG GGGGoGGGG')
  const [activeColor, setActiveColor] = useState(Colors3x3.colors[0]);
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
    setCube(new Cube('GGGGGGGGG GGGGGGGGG GGGGGGGGG GGGGGGGGG GGGGGGGGG GGGGGGGGG'));
  }

  const handleDownload = () => {
    const element = document.getElementById('flat-cube');
    if (!element) return;

    html2canvas(element, { backgroundColor: null }).then(canvas => {
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'flat-cube.png';
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
        inputValue={cube.getFullDescription()}
        onReset={handleReset}
        onErase={handleErase}
        onDownload={handleDownload}
      />

      <div id="flat-cube" className={clsx(styles['drawing-zone'], flatStyles['flat-cube'])}>
        <div></div>
        <CubeFace cube={cube} face="up" handleClick={handleClick} />
        <div></div>
        <div></div>
        <CubeFace cube={cube} face="left" handleClick={handleClick} />
        <CubeFace cube={cube} face="front" handleClick={handleClick} />
        <CubeFace cube={cube} face="right" handleClick={handleClick} />
        <CubeFace cube={cube} face="back" handleClick={handleClick} />
        <div></div>
        <CubeFace cube={cube} face="down" handleClick={handleClick} />
      </div>
    </>
  );
}
