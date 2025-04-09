
import { ReactNode } from 'react';
import styles from './index.module.css';
import flatStyles from './FlatCubeDrawer3x3.module.css';
import DrawingTools from './DrawingTools';
import Cube from './Cube';
import CubeSquare from './CubeSquare';
import Colors3x3 from './Colors3x3';
import { useCubeDrawer } from '../../hooks/useCubeDrawer';

function CubeFace({ cube, face, handleClick }: { cube: Cube; face: string; handleClick: (face: string, index: number) => void }) {
  return (
    <div className={styles['c-face']}>
      {Array.from({ length: 9 }).map((_, index) => (
        <CubeSquare
          key={index}
          cube={cube}
          face={face}
          index={index}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default function FlatCubeDrawer3x3(): ReactNode {
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
    defaultCubeString: 'GGGGwGGGG GGGGyGGGG GGGGgGGGG GGGGrGGGG GGGGbGGGG GGGGoGGGG', // adjust as needed
    eraseCubeString: 'GGGGGGGGG GGGGGGGGG GGGGGGGGG GGGGGGGGG GGGGGGGGG GGGGGGGGG',
    inputValueGetter: (cube) => cube.getFullDescription(),
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
        onDownload={() => handleDownload('flat-cube', 'flat-cube.png')}
      />

      <div className={styles['drawing-zone']}>
        <div id="flat-cube" className={flatStyles['flat-cube']}>
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
      </div>
    </>
  );
}
