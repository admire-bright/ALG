function fourSum(nums: number[], target: number): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (target > 0 && nums[i] > target) return res;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const newTarget = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (newTarget > 0 && nums[j] > newTarget) break;
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let l = j + 1,
        r = nums.length - 1;
      while (l < r) {
        if (nums[j] + nums[l] + nums[r] === newTarget) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        } else if (nums[j] + nums[l] + nums[r] > newTarget) r--;
        else l++;
      }
    }
  }
  return res;
}
