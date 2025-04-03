import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import ColorSelector from './ColorSelector';
import html2canvas from 'html2canvas';
import styles from './index.module.css';
import faceStyles from './FaceCubeDrawer3x3.module.css';

const DEFAULT_CUBE = [
  ['gray', 'gray', 'gray', 'gray', 'white', 'gray', 'gray', 'gray', 'gray'],
];

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

export default function FaceCubeDrawer3x3() : ReactNode {
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
      <ColorSelector
        onChange={setActiveColor}
        onReset={handleReset}
        onErase={handleErase}
        onDownload={handleDownload}
        activeColor={activeColor}
        colors={colors}
      />

      <div id="face-cube" className={clsx(styles['drawing-zone'], faceStyles['face-cube'])}>
        <CubeFace cube={cube} row={0} handleClick={handleClick} />
      </div>
    </>
  );
}
