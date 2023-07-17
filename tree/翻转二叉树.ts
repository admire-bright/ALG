import { TreeNode } from './tree-node.model';

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  return new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
}
