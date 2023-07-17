function hammingWeight(n: number): number {
  let res = 0;
  while (n) {
    n &= n - 1; // 把最低位的1变为0
    res++;
  }
  return res;
}
