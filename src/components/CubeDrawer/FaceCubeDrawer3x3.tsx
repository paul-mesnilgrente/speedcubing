import clsx from "clsx";
import styles from './index.module.css';
import { ReactNode } from 'react';
import DrawingTools from './DrawingTools';
import Colors3x3 from './Colors3x3';
import TopViewWithSides from './TopViewWithSides';
import { useCubeDrawer } from '../../hooks/useCubeDrawer';

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

      <div className={styles['drawing-zone']}>
        <TopViewWithSides cube={cube} handleClick={handleClick} />
      </div>
    </>
  );
}
