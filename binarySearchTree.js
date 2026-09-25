class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(this.sortArray(array));
  }

  // sort and remove duplicates from array
  sortArray(array) {
    // sort array in ascending order
    const sorted = array.sort((a, b) => a - b);
  
    // remove any duplicate values
    // const duplicatesRemoved = sorted.filter((item, index) => sorted.indexOf(item) === index);
    const duplicatesRemoved = [...new Set(sorted)];

    return duplicatesRemoved;
  }

  // takes an array of numbers and turns it into a balanced binary tree full of Node objects and returns the level-0 root node
  buildTree(array) {
    return this.#buildTreeRecursive(array, 0, array.length - 1);
  }
  
  #buildTreeRecursive(array, start, end) {
    if (start > end) return null;

    // find median value and set as root node
    const mid = start + Math.floor((end - start) / 2);
    const root = new Node(array[mid]);
    
    // recursively build tree
    root.left = this.#buildTreeRecursive(array, start, mid - 1);
    root.right = this.#buildTreeRecursive(array, mid + 1, end);
  
    return root;
  }

  // accepts a value and returns true or false based on if the given value is in the tree or not
  includes(value) {
    return this.includesRecursive(this.root, value);
  }

  includesRecursive(node, value) {
    // base case
    if (node == null) return false;

    // value found
    if (node.data == value) return true;

    // search for value
    if (value < node.data) {
      return this.includesRecursive(node.left, value);
    } else {
      return this.includesRecursive(node.right, value);
    }
  }
}

export { Node, Tree };
