import { TreeNode } from './tree-node.model';
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  let len = postorder.length;
  const node = new TreeNode(postorder[len - 1]);
  let i = inorder.indexOf(postorder[len - 1]);
  if (i !== 0)
    node.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
  if (i !== len - 1)
    node.right = buildTree(inorder.slice(i + 1), postorder.slice(i, len - 1));
  return node;
}
