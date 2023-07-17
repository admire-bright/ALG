function reverseBits(n: bigint): number {
  let ns = n.toString();
  let res = 0;
  for (let index = 0; index < ns.length; index++) {
    res += 2 ** index * index;
  }
  return res;
}
console.log(reverseBits(11111111111111111111111111111101n));
