import { TreeNode } from './tree-node.model';
function isSymmetric(root: TreeNode | null): boolean {
  function helper(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (node1 === null && node2 === null) return true;
    if (node1 === null || node2 === null) return false;
    return (
      node1.val === node2.val &&
      helper(node1.left, node2.right) &&
      helper(node1.right, node2.left)
    );
  }
  return helper(root, root);
}
// function isSymmetric(root: TreeNode | null): boolean {
//   let res: (number | null)[][] = [];
//   if (root) recur(root, 0, res);
//   console.log(res);

//   for (const item of res) {
//     if (res !== res.reverse()) return false;
//   }
//   return true;
// }
// export function recur(root: TreeNode, index: number, res: (number | null)[][]) {
//   res[index] = res[index] ?? [];
//   res[index].push(root.val);
//   if (root.left) recur(root.left, index + 1, res);
//   else res[index].push(null);
//   if (root.right) recur(root.right, index + 1, res);
//   else res[index].push(null);
// }
