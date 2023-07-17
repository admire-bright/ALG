function getRow(rowIndex: number): number[] {
  let res = new Array(rowIndex + 1);
  let mid = rowIndex >> 1;
  for (let j = 0; j <= rowIndex; j++) {
    if (j <= mid) res[j] = helper(rowIndex, j);
    else res[j] = res[rowIndex - j];
  }
  return res;
}
function helper(i: number, j: number): number {
  if (j === 0 || i === j) dp[`${i}` + `${j}`] = 1;
  if (!Reflect.has(dp, `${i}` + `${j}`))
    dp[`${i}` + `${j}`] = helper(i - 1, j - 1) + helper(i - 1, j);
  return dp[`${i}` + `${j}`];
}
const dp: Record<string, number> = {};
