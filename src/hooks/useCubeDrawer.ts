import { useState } from 'react';
import html2canvas from 'html2canvas';
import Cube from '../components/CubeDrawer/Cube';
import Colors3x3 from '../components/CubeDrawer/Colors3x3';

export interface CubeDrawerConfig {
  defaultCubeString: string;
  eraseCubeString: string;
  // A function that takes a Cube and returns the string used in the DrawingTools input.
  inputValueGetter: (cube: Cube) => string;
}

export function useCubeDrawer(config: CubeDrawerConfig) {
  const { defaultCubeString, eraseCubeString, inputValueGetter } = config;
  const defaultCube = new Cube(defaultCubeString);
  const [activeColor, setActiveColor] = useState(Colors3x3.colors[0]);
  const [cube, setCube] = useState(defaultCube.clone());

  const handleClick = (face: string, index: number) => {
    const newCube = cube.clone();
    newCube.setSquare(face, index, activeColor);
    setCube(newCube);
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
    setCube(new Cube(eraseCubeString));
  };

  const handleDownload = (elementId: string, filename: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    html2canvas(element, { backgroundColor: null })
      .then((canvas) => {
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        console.error('Error capturing the element', err);
      });
  };

  return {
    activeColor,
    setActiveColor,
    cube,
    handleClick,
    handleInputChange,
    handleReset,
    handleErase,
    handleDownload,
    inputValue: inputValueGetter(cube),
  };
}
