function canWinNim(n: number): boolean {
  return n % 4 !== 0;
}
// function helper(n: number): boolean {
//   if (Reflect.has(dp, n)) return dp[n];
//   if (n > 3) {
//     dp[n] = !helper(n - 1) || !helper(n - 2) || !helper(n - 3);
//   }
//   return dp[n];
// }
// const dp: Record<number, boolean> = {
//   1: true,
//   2: true,
//   3: true,
// };
