import type Cube from "./Cube";
import clsx from "clsx";
import styles from './index.module.css';

// Specialized rendering for the face version.
export default function CubeSquare({ cube, face, index, onClick }: { cube: Cube; face: string; index: number; onClick: (face: string, index: number) => void }) {
  return (
    <button
      onClick={() => onClick(face, index)}
      className={clsx(
        styles['c-square'],
        styles[`p-${cube.getSquare(face, index)}`]
      )}
    />
  );
}
