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
  let end = traverseSll(this.head);
  end.next = node;
  return;
};

//helper function for append;
let traverseSll = function(node) {
  if(!node.next) return node;
  node = node.next;
  return traverseSll(node);
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
  let end = traverseSll(sll.head);
  return end.val;
};

let transformIntoDll = function(sll) {
  if(!sll) return false;
  if(!sll.head) return false;
  sll.head.prev = null;
  let tailNode = traverseAndTransform(sll.head)
  sll.tail = tailNode;
};

let traverseAndTransform = function(node) {
  if(!node) return;
  if(node.next) {
    node.next.prev = node;
    return traverseAndTransform(node.next);
  } else {
    return node;
  }
};

let sll = new Sll();
sll.append(5);
sll.append(6);
transformIntoDll(sll);

console.log(sll);
