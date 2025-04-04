export default class Cube {
  public up?: string;
  public left?: string;
  public front?: string;
  public right?: string;
  public back?: string;
  public down?: string;

  /**
   * Constructs a Rubik's cube instance.
   * @param description Either a 21-character top view string or a 54-character full cube string.
   */
  constructor(description: string) {
    description = description.replace(/\s+/g, ''); // Remove whitespace
    if (description.length === 21) {
      // Assuming a net with 3 rows of 7 characters each:
      this.up = description.slice(0, 9);
      this.down = 'yyyyyyyyy'; // Placeholder for the bottom face
      this.front = description.slice(9, 13) + 'gggggg';
      this.right = description.slice(13, 17) + 'rrrrrr';
      this.back = description.slice(17, 21) + 'bbbbbb';
      this.left = description.slice(21, 25) + 'oooooo';
    } else if (description.length === 54) {
      // Full cube description, order: Up, Left, Front, Right, Back, Down (each face is 9 characters)
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

  public getDescription(): string {
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
    return new Cube(this.getDescription());
  }

  public setSquare(face: string, index: number, color: string): void {
    if (this[face]) {
      const colors = this[face].split('');
      if (index >= 0 && index < colors.length) {
        colors[index] = color.charAt(0); // Use the first character of the color
        this[face] = colors.join('');
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
  public faceColors(face: string): string[] {
    const colors = this[face];
    if (!colors) {
      throw new Error(`Face ${face} does not exist.`);
    }
    return colors.split('').map((color) => {
      switch (color) {
        case 'w':
          return 'white';
        case 'y':
          return 'yellow';
        case 'g':
          return 'green';
        case 'r':
          return 'red';
        case 'b':
          return 'blue';
        case 'o':
          return 'orange';
        default:
          return 'gray'; // Default color for unknown characters
      }
    });
  }
}
