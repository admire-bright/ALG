function countBits(n: number): number[] {
  let x = 1,
    temp = 0;
  let res: number[] = new Array(n + 1);
  res[0] = 0;
  for (let i = 1; i <= n; i++) {
    if (i === 2 * x) x *= 2;
    temp = i % x;
    res[i] = res[temp] + 1;
  }
  return res;
}
