let Node = require('./node.js');

let Sll = module.exports = function() {
  this.head = null;
};

//attach to end
Sll.prototype.append = function(val) {
  if (!val) return false;
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
    return;
  }
  let end = traverse(this.head);
  end.next = node;
  return;
};

//helper function for append;
let traverse = function(node) {
  if(!node.next) return node;
  node = node.next;
  return traverse(node);
};

//add node to beginning of list
Sll.prototype.prepend = function(val) {
  if(!val) return false;
  let node = new Node(val);
  if(!this.head) {
    this.head = node;
    return;
  }
  let temp = this.head;
  this.head = node;
  this.head.next = temp;
  return;
};

//returns the value of the tail of the linked list
let findEnd = function(sll) {
  let end = traverse(sll.head);
  return end.val;
};
