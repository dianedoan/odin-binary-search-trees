import { Node, Tree } from "./binarySearchTree.js";

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}

// const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const array = [7, 1, 3, 2, 1, 6, 4, 5];

const tree = new Tree(array);

console.log(tree);
prettyPrint(tree.root);

console.log(tree.includes(1));
console.log(tree.includes(0));
console.log(tree.insert(8));
prettyPrint(tree.root);

console.log(tree.deleteItem(8));
prettyPrint(tree.root);

tree.levelOrderForEach((value) => {
  console.log(value);
});

tree.inOrderForEach((value) => {
  console.log(value);
});

tree.preOrderForEach((value) => {
  console.log(value);
});

tree.postOrderForEach((value) => {
  console.log(value);
});
