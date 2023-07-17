function missingNumber(nums: number[]): number {
  // let temp = new Array(nums.length).fill(-1);
  // for (let index = 0; index < nums.length; index++) {
  //   temp[nums[index]] = nums[index];
  // }
  // for (let index = 0; index < temp.length; index++) {
  //   if (temp[index] === -1) return index;
  // }
  // let res = nums.length;
  // for (let index = 0; index < nums.length; index++) {
  //   res += index;
  //   res -= nums[index];
  // }
  // return res;
  let res = nums.length;
  for (let index = 0; index < nums.length; index++) {
    res ^= index ^ nums[index];
  }
  return res;
}
