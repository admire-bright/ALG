function plusOne(nums: number[]) {
  let flag = false;
  for (let index = nums.length - 1; index >= 0; index--) {
    if (index === nums.length - 1 || flag) {
      if (nums[index] < 9) {
        nums[index] += 1;
        flag = false;
      } else {
        nums[index] = 0;
        flag = true;
      }
    }
  }
  if (nums[0] === 0) nums.unshift(1);
  return nums;
}

function plusOne1(nums: number[]) {
  let flag = 1;
  for (let index = nums.length - 1; index >= 0; index--) {
    if (flag) {
      nums[index] = (nums[index] + flag) % 10;
      flag = nums[index] ? 0 : 1;
    }
  }
  if (nums[0] === 0) nums.unshift(1);
  return nums;
}
console.log(plusOne1([9, 9, 9]));
