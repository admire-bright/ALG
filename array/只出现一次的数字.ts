function singleNumber(nums: number[]): number {
  let res = nums[0];
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
}
