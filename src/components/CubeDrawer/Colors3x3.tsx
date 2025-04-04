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
      default:
        return 'gray'; // Default color for unknown characters
    }
  }
}
