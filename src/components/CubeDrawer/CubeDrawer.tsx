import styles from './CubeDrawer.module.css';
import ColorSelector from './ColorSelector';
import { useState } from 'react';
import clsx from 'clsx';

const DEFAULT_CUBE = [
  ['gray', 'gray', 'gray', 'gray', 'white', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'yellow', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'green', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'red', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'blue', 'gray', 'gray', 'gray', 'gray'],
  ['gray', 'gray', 'gray', 'gray', 'orange', 'gray', 'gray', 'gray', 'gray'],
];

function InvisibleFace() {
  return (
    <div className={styles['c-face']}>
      {Array.from({ length: 9 }, (_, i) => (
        <button
          key={i}
          className={clsx(styles['c-piece'], styles['c-piece--invisible'])}
        />
      ))}
    </div>
  );
}

function CubeFace({ cube, row, handleClick }: { cube: string[][]; row: number; handleClick: (row: number, col: number) => void }) {
  return (
    <div className={styles['c-face']}>
      {cube[row].map((color, index) => (
        <button
          key={index}
          onClick={() => handleClick(row, index)}
          className={clsx(styles['c-piece'], styles[`p-${color}`])}
        ></button>
      ))}
    </div>
  );
}

export default function CubeDrawer() : ReactNode {
  const colors = ['white', 'yellow', 'green', 'red', 'blue', 'orange', 'gray'];

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [cube, setCube] = useState(DEFAULT_CUBE.map(row => [...row]));

  const handleClick = (row: number, col: number) => {
    const newCube = [...cube];
    newCube[row][col] = activeColor;
    setCube(newCube);
  };

  const handleReset = () => {
    setCube(DEFAULT_CUBE.map(row => [...row]));
  };

  const handleErase = () => {
    const newCube = [...cube];
    for (let i = 0; i < newCube.length; i++) {
      for (let j = 0; j < newCube[i].length; j++) {
        newCube[i][j] = 'gray';
      }
    }
    setCube(newCube);
  }

  return (
    <>
      <ColorSelector
        onChange={setActiveColor}
        onReset={handleReset}
        onErase={handleErase}
        activeColor={activeColor}
        colors={colors}
      />

      <div className={styles['flat-cube']}>
        <InvisibleFace />
        <CubeFace cube={cube} row={0} handleClick={handleClick} />
        <InvisibleFace />
        <InvisibleFace />
        <CubeFace cube={cube} row={5} handleClick={handleClick} />
        <CubeFace cube={cube} row={2} handleClick={handleClick} />
        <CubeFace cube={cube} row={3} handleClick={handleClick} />
        <CubeFace cube={cube} row={4} handleClick={handleClick} />
        <InvisibleFace />
        <CubeFace cube={cube} row={1} handleClick={handleClick} />

      </div>
    </>
  );
}
