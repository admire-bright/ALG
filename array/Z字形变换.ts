function convert(s: string, numRows: number): string {
  const arr: string[] = new Array(numRows).fill('');
  if (numRows === 1) return s;
  for (let i = 0; i < s.length; i++) {
    let temp = i % (2 * (numRows - 1));
    let index = temp < numRows ? temp : 2 * (numRows - 1) - temp;
    arr[index] += s[i];
  }
  return arr.join('');
}
