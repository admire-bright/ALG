function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set<number>();
  for (const item of nums1) if (nums2.includes(item)) set.add(item);
  return [...set];
}
