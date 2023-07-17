function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let res = 0;
  let range = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const actual = nums[i] + nums[l] + nums[r];
      if (actual === target) return actual;
      else if (actual < target) {
        if (target - actual < range) {
          res = actual;
          range = target - actual;
        }
        l++;
      } else {
        if (actual - target < range) {
          res = actual;
          range = actual - target;
        }
        r--;
      }
    }
  }
  return res;
}
