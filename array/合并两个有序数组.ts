function mergeSortedArray(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
) {
  let totalIndex = m + n - 1;
  while (n > 0) {
    if (m === 0) {
      nums1[totalIndex--] = nums2[--n];
      continue;
    }
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[totalIndex--] = nums1[--m];
    } else {
      nums1[totalIndex--] = nums2[--n];
    }
  }
  // while (n) {
  //   if ((m > 0 && nums1[m - 1] < nums2[n - 1]) || m === 0) {
  //     nums1[m + n - 1] = nums2[--n];
  //   } else {
  //     nums1[m + n - 1] = nums1[--m];
  //   }
  // }
  return nums1;
}

console.log(mergeSortedArray([0, 1, 2, 3, 0, 0, 0, 0], 4, [0, 2, 5, 6], 4));
