import { TreeNode } from './tree-node.model';

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) return [];
  let paths: number[][] = [];
  binaryTreePathsHelper(root, [], paths);
  return paths.map((item) => {
    if (item.length === 1) return item.toString();
    else return item.join('->');
  });
}
function binaryTreePathsHelper(
  node: TreeNode,
  path: number[],
  paths: number[][]
) {
  path = [...path, node.val];
  if (!node.left && !node.right) paths.push(path);
  if (node.left) binaryTreePathsHelper(node.left, path, paths);
  if (node.right) binaryTreePathsHelper(node.right, path, paths);
}
