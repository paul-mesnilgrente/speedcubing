import styles from './CubeDrawer.module.css';
import clsx from 'clsx';

export default function ColorSelector({onChange, activeColor, colors, onReset, onErase}) : ReactNode {
  return (
    <div className={styles["color-selector"]}>
      {colors.map((color) => (
        <button
          key={color}
          className={clsx(styles[`p-${color}`], styles['color-button'], {[styles['color-button--active']]: color === activeColor})}
          onClick={() => onChange(color)}
        ></button>
      ))}
      <button
        className={clsx(styles["color-button"], styles["color-button--action"])}
        onClick={onReset}
      >
        <svg fill="currentColor" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
          <path d="M960 0v112.941c467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059-467.125 0-847.059-379.934-847.059-847.059 0-267.106 126.607-515.915 338.824-675.727v393.374h112.94V112.941H0v112.941h342.89C127.058 407.38 0 674.711 0 960c0 529.355 430.645 960 960 960s960-430.645 960-960S1489.355 0 960 0" fillRule="evenodd"/>
        </svg>
      </button>
      <button
        className={clsx(styles["color-button"], styles["color-button--action"])}
        onClick={onErase}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.0722 3.9967L20.7508 9.83395L17.0544 13.5304L13.0758 17.5H21.0041V19H7.93503L4.00195 15.0669L15.0722 3.9967ZM10.952 17.5L15.4628 12.9994L11.8268 9.3634L6.12327 15.0669L8.55635 17.5H10.952Z" />
        </svg>
      </button>
    </div>
  );
}
