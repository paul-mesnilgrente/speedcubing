export default class Colors3x3 {
  public static colors = [
    'white',
    'yellow',
    'green',
    'red',
    'blue',
    'orange',
    'gray'
  ];

  public static mapLetterToColor(letter: string): string {
    switch (letter) {
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
      case 'G':
        return 'gray';
      default:
        throw new Error(`Unknown color letter: ${letter}`);
    }
  }

  public static mapColorToLetter(color: string): string {
    switch (color) {
      case 'white':
        return 'w';
      case 'yellow':
        return 'y';
      case 'green':
        return 'g';
      case 'red':
        return 'r';
      case 'blue':
        return 'b';
      case 'orange':
        return 'o';
      case 'gray':
        return 'G';
      default:
        throw new Error(`Unknown color: ${color}`);
    }
  }
}
