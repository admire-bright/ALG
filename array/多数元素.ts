function majorityElement(nums: number[]): number {
  let counter = 1;
  let num = nums[0];
  for (let index = 1; index < nums.length; index++) {
    if (counter === 0) num = nums[index];
    counter += num === nums[index] ? 1 : -1;
    // if (num === nums[index]) counter++;
    // else {
    //   if (counter === 0) {
    //     counter = 1;
    //     num = nums[index];
    //   } else counter--;
    // }
  }
  return num;
}
