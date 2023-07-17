import { TreeNode } from './tree-node.model';

export function preorderTraversal(root: TreeNode | null): number[] {
  return root
    ? [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right),
      ]
    : [];
}
