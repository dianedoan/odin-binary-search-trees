import { Node, Tree } from "./binarySearchTree.js";

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}

// takes size as the array size and creates an array of random numbers with each element having a value less than 100
function createArray(size) {
  const array = [];

  for (let i = 0; i < size; i++) {
    let randNum = Math.floor(Math.random() * 100) + 1;
    array.push(randNum);
  }

  return array;
}

const array = createArray(10);
const tree = new Tree(array);

console.log(tree);
prettyPrint(tree.root);
console.log(tree.isBalanced());

const levelOrder = [];
const preOrder = [];
const postOrder = [];
const inOrder = [];

tree.levelOrderForEach((value) => {
  levelOrder.push(value);
});
console.log("Level order traversal: " + levelOrder);
levelOrder.length = 0;

tree.preOrderForEach((value) => {
  preOrder.push(value);
});
console.log("Preorder traversal: " + preOrder);
preOrder.length = 0;

tree.postOrderForEach((value) => {
  postOrder.push(value);
});
console.log("Postorder traversal: " + postOrder);
postOrder.length = 0;

tree.inOrderForEach((value) => {
  inOrder.push(value);
});
console.log("Inorder traversal: " + inOrder);
inOrder.length = 0;

tree.insert(101);
tree.insert(150);
tree.insert(199);
prettyPrint(tree.root);
console.log(tree.isBalanced());

tree.rebalance();
prettyPrint(tree.root);
console.log(tree.isBalanced());

tree.levelOrderForEach((value) => {
  levelOrder.push(value);
});
console.log("Level order traversal: " + levelOrder);
levelOrder.length = 0;

tree.preOrderForEach((value) => {
  preOrder.push(value);
});
console.log("Preorder traversal: " + preOrder);
preOrder.length = 0;

tree.postOrderForEach((value) => {
  postOrder.push(value);
});
console.log("Postorder traversal: " + postOrder);
postOrder.length = 0;

tree.inOrderForEach((value) => {
  inOrder.push(value);
});
console.log("Inorder traversal: " + inOrder);
inOrder.length = 0;
