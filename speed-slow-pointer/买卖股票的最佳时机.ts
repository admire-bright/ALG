function maxProfit(prices: number[]): number {
  let max = 0;
  let slow = 0;
  for (let fast = 1; fast < prices.length; fast++) {
    if (prices[fast] > prices[slow])
      max = Math.max(max, prices[fast] - prices[slow]);
    else slow = fast;
  }
  return max;
}
