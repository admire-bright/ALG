function removeElement(nums: number[], val: number): number {
  let slow = 0;
  for (const item of nums) {
    if (item !== val) nums[slow++] = item;
  }
  return slow;
}
