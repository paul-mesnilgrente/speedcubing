import type { ReactNode } from 'react';
import clsx from 'clsx';
import drawingStyles from './DrawingTools.module.css';
import styles from './index.module.css';

export default function DrawingTools({activeColor, colors, onChange, onInputChange, inputValue, onReset, onErase, onDownload, }) : ReactNode {
  return (
    <div className={drawingStyles["drawing-tools"]}>
      {colors.map((color) => (
        <button
          key={color}
          className={clsx(styles[`p-${color}`], drawingStyles['color-button'], {[drawingStyles['color-button--active']]: color === activeColor})}
          onClick={() => onChange(color)}
        ></button>
      ))}
      <button
        aria-label="Reset colors"
        className={clsx(drawingStyles["color-button"], drawingStyles["color-button--action"])}
        onClick={onReset}
      >
        <svg fill="currentColor" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
          <path d="M960 0v112.941c467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059-467.125 0-847.059-379.934-847.059-847.059 0-267.106 126.607-515.915 338.824-675.727v393.374h112.94V112.941H0v112.941h342.89C127.058 407.38 0 674.711 0 960c0 529.355 430.645 960 960 960s960-430.645 960-960S1489.355 0 960 0" fillRule="evenodd"/>
        </svg>
      </button>
      <button
        aria-label="Erase all colors"
        className={clsx(drawingStyles["color-button"], drawingStyles["color-button--action"])}
        onClick={onErase}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.0722 3.9967L20.7508 9.83395L17.0544 13.5304L13.0758 17.5H21.0041V19H7.93503L4.00195 15.0669L15.0722 3.9967ZM10.952 17.5L15.4628 12.9994L11.8268 9.3634L6.12327 15.0669L8.55635 17.5H10.952Z" />
        </svg>
      </button>
      <button
        aria-label="Download"
        className={clsx(drawingStyles["color-button"], drawingStyles["color-button--action"])}
        onClick={onDownload}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22Z" fill="currentcolor"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M13.3099 18.6881C12.5581 19.3396 11.4419 19.3396 10.6901 18.6881L5.87088 14.5114C4.47179 13.2988 5.32933 11 7.18074 11L9.00001 11V3C9.00001 1.89543 9.89544 1 11 1L13 1C14.1046 1 15 1.89543 15 3L15 11H16.8193C18.6707 11 19.5282 13.2988 18.1291 14.5114L13.3099 18.6881ZM11.3451 16.6091C11.7209 16.9348 12.2791 16.9348 12.6549 16.6091L16.8193 13H14.5C13.6716 13 13 12.3284 13 11.5V3L11 3V11.5C11 12.3284 10.3284 13 9.50001 13L7.18074 13L11.3451 16.6091Z" fill="currentcolor"/>
        </svg>
      </button>
      <input name="cube_description" type="text" onChange={onInputChange} value={inputValue} />
    </div>
  );
}
