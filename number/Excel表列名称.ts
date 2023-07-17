function convertToTitle(columnNumber: number): string {
  let s = '';
  while (columnNumber) {
    columnNumber = columnNumber - 1;
    s = String.fromCharCode(65 + (columnNumber % 26)) + s;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return s;
}
