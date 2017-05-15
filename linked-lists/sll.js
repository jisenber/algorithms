let Node = require('./sll-node.js');

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

//helper function to find the second-to-last node in a linked list
let findPenultimate = function(node) {
  if(!node.next.next) return node;
  node = node.next;
  return findPenultimate(node);
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

Sll.prototype.pop = function() {
  if (!this.head) return false;
  if(!this.head.next) {
    let endVal  = this.head;
    this.head = null;
    return endVal;
  }
  let penultimateNode = findPenultimate(this.head);
  let endVal = penultimateNode.next.val;
  penultimateNode.next = null;
  return endVal;
};

//returns the value of the tail of the linked list. version of peek
let findEnd = function(sll) {
  let end = traverseSll(sll.head);
  return end.val;
};

//transforms a singly linked list into a doubly linked list
let transformIntoDll = function(sll) {
  if(!sll) return false;
  if(!sll.head) return false;
  sll.head.prev = null;
  let tailNode = traverseAndTransform(sll.head);
  sll.tail = tailNode;
};

//helper function that traverses a singly linked list makes each node doubly linked
let traverseAndTransform = function(node) {
  if(!node) return;
  if(node.next) {
    node.next.prev = node;
    return traverseAndTransform(node.next);
  } else {
    return node;
  }
};
