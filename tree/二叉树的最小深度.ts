import { TreeNode } from './tree-node.model';

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  if (root.right && root.left)
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  else if (root.left) return minDepth(root.left) + 1;
  else if (root.right) return minDepth(root.right) + 1;
  else return 1;
}
