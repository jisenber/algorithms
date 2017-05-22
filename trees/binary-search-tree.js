//Binary Search Trees

//bring in a binary search Node
let Node = require('./bs-node.js');

//Tree constructor
let Tree = module.exports = function() {
  this.root = null;
};

//add a node to the tree
Tree.prototype.insert = function(val) {
  if (!val) return false;
  let node = new Node(val);
  if(!this.root) {
    this.root = node;
    return;
  }
  traverseDown(node, this.root);
};

//helper function that was check for left & right child nodes and go down the tree accordingly
function traverseDown(node, pointer) {
  if ((node.val <= pointer.val) && (!pointer.left)) {
    pointer.left = node;
    return;
  }
  if ((node.val > pointer.val) && (!pointer.right)) {
    pointer.right = node;
    return;
  }
  if (node.val <= pointer.val) {
    return traverseDown(node, pointer.left);
  }
  if (node.val > pointer.val) {
    return traverseDown(node, pointer.right);
  }
}

//insert works. Now to implement Depth and Breadth first searches.
let tree = new Tree();
tree.insert(10);
tree.insert(2);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(30);

// function dfs(node, tree) {
//   if(!tree || !node) return false
//   if (!tree.root) return false
//   if(tree.root.left)
// }
