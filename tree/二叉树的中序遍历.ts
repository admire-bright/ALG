import { TreeNode } from './tree-node.model';

// export function inorderTraversal(root: TreeNode | null): number[] {
//   const res: number[] = [];
//   dfs(root, res);
//   return res;
// }
// function dfs(node: TreeNode | null, res: number[]) {
//   if (node?.left) dfs(node.left, res);
//   if (node?.val || node?.val === 0) res.push(node.val);
//   if (node?.right) dfs(node.right, res);
// }
export function inorderTraversal(root: TreeNode | null): number[] {
  return root
    ? [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right),
      ]
    : [];
}
