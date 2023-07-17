function intersect(nums1: number[], nums2: number[]): number[] {
  if (nums1.length > nums2.length) return intersect(nums2, nums1);
  const res: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    const j = nums2.indexOf(nums1[i]);
    if (j !== -1) {
      res.push(nums2[j]);
      nums2[j] = -1;
    }
  }
  return res;
}
