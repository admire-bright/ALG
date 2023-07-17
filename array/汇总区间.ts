function summaryRanges(nums: number[]): string[] {
  if (!nums.length) return [];
  let s: number[][] = [[nums[0], nums[0]]];
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] === nums[index - 1] + 1) s[s.length - 1][1] = nums[index];
    else s.push([nums[index], nums[index]]);
  }
  return s.map((item) => {
    if (item[0] === item[1]) return item[0].toString();
    else return item.join('->');
  });
}
