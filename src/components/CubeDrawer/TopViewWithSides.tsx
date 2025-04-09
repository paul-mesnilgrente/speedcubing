import faceStyles from './FaceCubeDrawer3x3.module.css';
import CubeSquare from "./CubeSquare";
import Cube from "./Cube";

export default function TopViewWithSides({
  cube,
  handleClick
}: { cube: Cube; handleClick: (face: string, index: number) => void }) {
  return (
    <div id="face-cube" className={faceStyles['face-cube']}>
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
    </div>
  );
}
