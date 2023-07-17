import { TreeNode } from '../models';

function inorderTraversal(root: TreeNode | null): number[] {
  return root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : [];
}
