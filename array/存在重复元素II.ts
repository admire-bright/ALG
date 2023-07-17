function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>();
  for (let index = 0; index < nums.length; index++) {
    if (map.has(nums[index]) && index - map.get(nums[index])! <= k) {
      return true;
    } else map.set(nums[index], index);
  }
  return false;
}
