import { TreeNode } from './tree-node.model';

function maxDepth(root: TreeNode | null): number {
  return recur(root, 0);
}
function recur(node: TreeNode | null, depth: number): number {
  if (!node) return depth;
  const left = recur(node.left, depth + 1);
  const right = recur(node.right, depth + 1);
  return Math.max(left, right);
}
function maxDepthBetter(root: TreeNode | null): number {
  if (!root) return 0;
  return Math.max(maxDepthBetter(root.left), maxDepthBetter(root.right)) + 1;
}
function maxDepthBottomUp(root: TreeNode | null): number {
  if (!root) return 0;
  const left = maxDepthBottomUp(root.left);
  const right = maxDepthBottomUp(root.right);
  return Math.max(left, right) + 1;
}
