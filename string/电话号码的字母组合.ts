function letterCombinations(digits: string): string[] {
  let arr = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let total = 1;
  for (const digit of digits) total *= arr[Number(digit)].length;
  let s: string[] = new Array(total).fill('');
  for (let i = 0; i < digits.length; i++) {
    const perString = arr[Number(digits[i])];
    const perLength = s.length / perString.length;
    for (let j = 0; j < arr[Number(digits[i])].length; j++) {
      for (let k = perLength * j; j < perLength * (j + 1); k++) {
        s[k] += perString[j];
      }
    }
  }
  return s;
}
