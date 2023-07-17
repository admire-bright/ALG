function climbStairs(n: number): number {
  if (Reflect.has(dp, n)) return dp[n];
  else dp[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return dp[n];
}
const dp = { 1: 1, 2: 2 };

function climbStairsBetter(n: number): number {
  let i1 = 0,
    i2 = 0,
    res = 1;
  for (let i = 1; i <= n; i++) {
    i1 = i2;
    i2 = res;
    res = i1 + i2;
  }
  return res;
}
