function reverse(x: number): number {
  let res = 0;
  let max = 2 ** 31;
  while (x !== 0) {
    let temp = x % 10;
    if (res > (max - 1 - temp) / 10 || res < (-max - temp) / 10) return 0;
    res = res * 10 + temp;
    x = ~~(x / 10);
  }
  return res;
}
