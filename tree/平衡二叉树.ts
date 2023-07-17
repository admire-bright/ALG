import { TreeNode } from './tree-node.model';

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
  const left = maxDepth(root.left);
  const right = maxDepth(root.left);
  const isBalance = Math.abs(left - right) > 1;
  return isBalance && isBalanced(root.left) && isBalanced(root.right);
}
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
function isBalancedBetter(root: TreeNode | null): boolean {
  return maxDepthBetter(root) >= 0;
}
function maxDepthBetter(root: TreeNode | null): number {
  if (!root) return 0;
  let left = maxDepthBetter(root.left);
  let right = maxDepthBetter(root.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
  else
    return Math.max(maxDepthBetter(root.left), maxDepthBetter(root.right)) + 1;
}
