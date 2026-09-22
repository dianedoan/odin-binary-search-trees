class Node {
  constructor(value) {
    this.value = value;
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
    const duplicatesRemoved = sorted.filter((item, index) => sorted.indexOf(item) === index);

    return duplicatesRemoved;
  }

  // takes an array of numbers and turns it into a balanced binary tree full of Node objects and returns the level-0 root node
  buildTree(array) {
    return this.#buildTreeRecursive(array, 0, array.length - 1);
  }
  
  #buildTreeRecursive(array, start, end) {
    if (start > end) return null;

    // find median value and set as root node
    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(array[mid]);
    
    // recursively build tree
    root.left = this.#buildTreeRecursive(array, start, mid - 1);
    root.right = this.#buildTreeRecursive(array, mid + 1, end);
  
    return root;
  }
  
}

export { Node, Tree };
