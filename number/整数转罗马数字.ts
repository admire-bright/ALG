function intToRoman(num: number): string {
  let s = '';
  const arr: [string, number][] = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];
  for (let index = 0; index < arr.length; index++) {
    while (num >= arr[index][1]) {
      num -= arr[index][1];
      s += arr[index][0];
    }
    if (num === 0) break;
  }
  return s;
}
