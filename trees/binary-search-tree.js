//Binary Search Trees

//bring in a binary search Node
let Node = require('./bs-node.js');
let Stack = require('../stacks/stack.js')
let Queue = require('../queues/queue.js')

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


//traversal helper function that pushes nodes into a stack
function dfTraverse(pointer, stack=new Stack()) {
  if(!pointer) return false;
    stack.push(pointer.val)
  if (pointer.left) {
    dfTraverse(pointer.left, stack);
  } if (pointer.right) {
    dfTraverse(pointer.right, stack);
  }
  return stack
}

//depth first search of a tree. Because a stack is used, it will go from right to left
 Tree.prototype.dfs = function(target) {
   let searchableStack = dfTraverse(this.root)
   while(searchableStack.size >= 1) {
     let checkNode = searchableStack.pop()
     if(checkNode === target) {
       return true
     }
   }
   return false
 }

//breadth first search on a binary search tree
 Tree.prototype.bfs = function(target) {
   if (!target) return false
   let q = new Queue()
   q.enqueue(this.root)
   while(q.head) {
     let pointer = q.dequeue()
     console.log(pointer);
     if(pointer.val === target) {
       return true
     }
     if (pointer.left) {
       q.enqueue(pointer.left)
     } if (pointer.right) {
        q.enqueue(pointer.right)
     }
   }
   return false
 }

 let tree = new Tree();
 tree.insert(10);
 tree.insert(2);
 tree.insert(20);
 tree.insert(1);
 tree.insert(6);
 tree.insert(15);
 tree.insert(30);

console.log(tree.bfs(31));
