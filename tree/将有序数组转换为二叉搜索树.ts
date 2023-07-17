import { TreeNode } from './tree-node.model';

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const mid = nums.length >> 1;
  const node = new TreeNode(nums[mid]);
  if (mid) node.left = sortedArrayToBST(nums.slice(0, mid));
  if (mid != nums.length - 1)
    node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
  return node;
}
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
