import Colors3x3 from "./Colors3x3";

export default class Cube {
  public up?: string;
  public left?: string;
  public front?: string;
  public right?: string;
  public back?: string;
  public down?: string;

  public colors: Colors3x3;

  /**
   * Constructs a Rubik's cube instance.
   * @param description Either a 21-character top view string or a 54-character full cube string.
   */
  constructor(description: string) {
    this.colors = new Colors3x3();
    description = description.replace(/\s+/g, ''); // Remove whitespace
    if (description.length === 21) {
      // Assuming a net with 3 rows of 7 characters each:
      this.up = description.slice(0, 9);
      this.down = 'yyyyyyyyy'; // Placeholder for the bottom face
      // debugger;
      this.front = description.slice(9, 12) + 'gggggg';
      this.right = description.slice(12, 15) + 'rrrrrr';
      this.back = description.slice(15, 18) + 'bbbbbb';
      this.left = description.slice(18, 21) + 'oooooo';
    } else if (description.length === 54) {
      this.up = description.slice(0, 9);
      this.down = description.slice(9, 18);
      this.front = description.slice(18, 27);
      this.right = description.slice(27, 36);
      this.back = description.slice(36, 45);
      this.left = description.slice(45, 54);
    } else {
      throw new Error("Invalid description string length. Provide either a 21-character top view or a 54-character full cube description.");
    }
  }

  public getTopViewWithSidesDescription(): string {
    return [
      this.up,
      this.front.slice(0, 3),
      this.right.slice(0, 3),
      this.back.slice(0, 3),
      this.left.slice(0, 3),
    ].join(' ');
  }

  public getFullDescription(): string {
    return [
      this.up,
      this.down,
      this.front,
      this.right,
      this.back,
      this.left,
    ].join(' ');
  }

  public clone(): Cube {
    return new Cube(this.getFullDescription());
  }

  public setSquare(face: string, index: number, color: string): void {
    if (this[face]) {
      const colors = this[face].split('');
      if (index >= 0 && index < colors.length) {
        colors[index] = Colors3x3.mapColorToLetter(color); // Use the first character of the color
        this[face] = colors.join('');
      } else {
        throw new Error(`Index ${index} is out of bounds for face ${face}.`);
      }
    } else {
      throw new Error(`Face ${face} does not exist.`);
    }
  }

  public getSquare(face: string, index: number): string {
    if (this[face]) {
      const colors = this[face].split('');
      if (index >= 0 && index < colors.length) {
        return Colors3x3.mapLetterToColor(colors[index]);
      } else {
        throw new Error(`Index ${index} is out of bounds for face ${face}.`);
      }
    } else {
      throw new Error(`Face ${face} does not exist.`);
    }
  }

  /**
   * Returns the colors of a specified face.
   * @param face The face to get colors from (e.g., "up", "down", "left", "right", "front", "back").
   * @returns An array of colors for the specified face. The letters are converted to colors.
   */
  public faceColors(face: string, start: number = 0, end: number = 9): string[] {
    const faceDescription = this[face];
    if (!faceDescription) {
      throw new Error(`Face ${face} does not exist.`);
    }
    return faceDescription.split('').slice(start, end).map((letter) => Colors3x3.mapLetterToColor(letter));
  }
}
