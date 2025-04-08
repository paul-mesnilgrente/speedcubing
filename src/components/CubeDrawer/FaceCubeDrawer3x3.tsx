
import { ReactNode } from 'react';
import clsx from 'clsx';
import DrawingTools from './DrawingTools';
import styles from './index.module.css';
import faceStyles from './FaceCubeDrawer3x3.module.css';
import Colors3x3 from './Colors3x3';
import Cube from './Cube';
import CubeSquare from './CubeSquare';
import { useCubeDrawer } from '../../hooks/useCubeDrawer';

function CubeFace({ cube, handleClick }: { cube: Cube; handleClick: (face: string, index: number) => void }) {
  return (
    <>
      {/* line 1 */}
      <div></div>
      <CubeSquare cube={cube} face="back" index={2} onClick={handleClick} />
      <CubeSquare cube={cube} face="back" index={1} onClick={handleClick} />
      <CubeSquare cube={cube} face="back" index={0} onClick={handleClick} />
      <div></div>

      {/* line 2 */}
      <CubeSquare cube={cube} face="left"  index={0} onClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={0} onClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={1} onClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={2} onClick={handleClick} />
      <CubeSquare cube={cube} face="right" index={0} onClick={handleClick} />

      {/* line 3 */}
      <CubeSquare cube={cube} face="left"  index={1} onClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={3} onClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={4} onClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={5} onClick={handleClick} />
      <CubeSquare cube={cube} face="right" index={1} onClick={handleClick} />

      {/* line 4 */}
      <CubeSquare cube={cube} face="left"  index={2} onClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={6} onClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={7} onClick={handleClick} />
      <CubeSquare cube={cube} face="up"    index={8} onClick={handleClick} />
      <CubeSquare cube={cube} face="right" index={2} onClick={handleClick} />

      {/* line 5 */}
      <div></div>
      <CubeSquare cube={cube} face="front" index={0} onClick={handleClick} />
      <CubeSquare cube={cube} face="front" index={1} onClick={handleClick} />
      <CubeSquare cube={cube} face="front" index={2} onClick={handleClick} />
      <div></div>
    </>
  );
}

export default function FaceCubeDrawer3x3(): ReactNode {
  const {
    activeColor,
    setActiveColor,
    cube,
    handleClick,
    handleInputChange,
    handleReset,
    handleErase,
    handleDownload,
    inputValue,
  } = useCubeDrawer({
    defaultCubeString: 'GGGGyGGGG GGG GGG GGG GGG', // adjust as needed
    eraseCubeString: 'GGGGGGGGG GGG GGG GGG GGG',
    inputValueGetter: (cube) => cube.getTopViewWithSidesDescription(),
  });

  return (
    <>
      <DrawingTools
        activeColor={activeColor}
        colors={Colors3x3.colors}
        onChange={setActiveColor}
        onInputChange={handleInputChange}
        inputValue={inputValue}
        onReset={handleReset}
        onErase={handleErase}
        onDownload={() => handleDownload('face-cube', 'face-cube.png')}
      />

      <div id="face-cube" className={clsx(styles['drawing-zone'], faceStyles['face-cube'])}>
        <CubeFace cube={cube} handleClick={handleClick} />
      </div>
    </>
  );
}
