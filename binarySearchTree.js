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
    } else if (value > node.data) {
      return this.includesRecursive(node.right, value);
    }
  }

  // accepts a value and inserts a new node with that value into the tree that preserves the binary search property
  insert(value) {
    // do nothing if value already exists in tree
    if (this.includes(value)) return;

    return this.insertRecursive(this.root, value);
  }

  insertRecursive(node, value) {
    // base case: insert new node
    if (node == null) return new Node(value);

    // every node to its left must have a lower value
    if (value < node.data) {
      node.left = this.insertRecursive(node.left, value);
    
    } else if (value > node.data) { // every node to its right must have a greater value
      node.right = this.insertRecursive(node.right, value);
    }

    return node;
  }

  // accepts a value and removes it from the tree
  deleteItem(value) {
    // do nothing if the value does not exist in the tree
    if (!this.includes(value)) return;

    return this.deleteItemRecursive(this.root, value);
  }

  deleteItemRecursive(node, value) {
    // base case
    if (node == null) return node;

    // value found
    if (node.data == value) {
      // directly remove node if it has no children
      // if node has one child remove node and connect its parent directly to its only child
      if (node.left == null) {
        return node.right;
      } else if (node.right == null) {
        return node.left;
      } else { // if node has two children
        // find the successor/predecessor which is smallest in right subtree
        let successor = node.right;
        while (successor != null && successor.left != null) {
          successor = successor.left;
        }
        
        // replace node with its inorder successor/predecessor 
        node.data = successor.data;

        // delete node
        node.right = this.deleteItemRecursive(node.right, successor.data);
      }
  
    } else if (value < node.data) { // every node to its left must have a lower value
      node.left = this.deleteItemRecursive(node.left, value);
    
    } else if (value > node.data) { // every node to its right must have a higher value
      node.right = this.deleteItemRecursive(node.right, value);
    }

    return node;
  }

}

export { Node, Tree };
