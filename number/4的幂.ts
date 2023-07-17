function isPowerOfFour(n: number): boolean {
  let x = 0b00101010101010101010101010101010;
  let y = 0b01000000000000000000000000000000;
  return n > 0 && y % n === 0 && (x & n) === 0;
  // return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
}
