import { TreeNode } from './tree-node.model';

function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = [];
  if (root) recur(root, 0, res);
  return res;
}
export function recur(root: TreeNode, index: number, res: number[][]) {
  res[index] = res[index] ?? [];
  res[index].push(root.val);
  if (root.left) recur(root.left, index + 1, res);
  if (root.right) recur(root.right, index + 1, res);
}
