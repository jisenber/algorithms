//Binary Search Trees

//bring in a binary search Node
let Node = require('./node.js')

//Tree constructor
let Tree = module.exports = function() {
  this.root = null;
};

//add a node to the tree
Tree.prototype.append = function(val) {
  if (!val) return false;
  let node = new Node(val);
  if(!this.root) {
    this.root = node;
    return;
  }
  if (node.val <= this.root) {
    traverse(node, this.root.left);

  } else if (node.val> this.root) {
    traverse(node, this.root.right);
  }
}

//will work on this later
function traverse(node, index) {
  if (!node.left || !node.right) {
   return node
  }
}
