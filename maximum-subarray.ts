// 时间复杂度O(N^3),空间复杂度O(1)
function primalViolentSolution(nums: number[]) {
  let sum = 0;
  let maxSum = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}
// console.log(primalViolentSolution([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// 时间复杂度O(N^2),空间复杂度O(1)
function PrefixSum(nums: number[]) {
  let sum = 0;
  let maxSum = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}
// console.log(PrefixSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 时间复杂度O(N),空间复杂度O(1)
function PrefixSum2(nums: number[]) {
  let sum = 0;
  let maxSum = nums[0]; // 第j+1项到i项求和
  let minSum = 0; // 前j项求和，小于等于0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum - minSum > maxSum) maxSum = sum - minSum;
    if (sum < minSum) minSum = sum;
  }
  return maxSum;
}
// console.log(PrefixSum2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 分治法
// 二分法+递归,时间负载度O(NlogN)，空间复杂度O(logN)
function helper(nums: number[], start: number, end: number): number {
  if (start === end) return nums[start];
  let lmax = -Number.MAX_VALUE;
  let rmax = -Number.MAX_VALUE;
  const mid = ((end - start) >> 1) + start;
  const l = helper(nums, start, mid);
  const r = helper(nums, mid + 1, end);
  let sum = 0;
  for (let index = mid; index >= start; index--) {
    sum += nums[index];
    lmax = Math.max(sum, lmax);
  }
  sum = 0;
  for (let index = mid + 1; index <= end; index++) {
    sum += nums[index];
    rmax = Math.max(sum, rmax);
  }
  return Math.max(l, r, lmax + rmax);
}
function divideAndConquer(nums: number[]) {
  return nums.length ? helper(nums, 0, nums.length - 1) : 0;
}
// console.log(divideAndConquer([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 动态规划
// 动态规划方程：dp[i]=max(dp[i-1]+nums[i],num[i]);dp[0]=nums[0];
export function maximumSubarray(nums: number[]) {
  let maxSum = nums[0];
  let curMaxSum = nums[0]; // 循环中的前一项，即dp(i-1)
  for (let index = 1; index < nums.length; index++) {
    curMaxSum = Math.max(curMaxSum + nums[index], nums[index]);
    maxSum = Math.max(maxSum, curMaxSum);
  }
  return maxSum;
}

// console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 时间复杂度O(N^2),空间复杂度O(1)
function PrefixMultiply(nums: number[]) {
  let sum = 1;
  let maxSum = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    sum = 1;
    for (let j = i; j < nums.length; j++) {
      sum *= nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}
console.log(PrefixMultiply([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
