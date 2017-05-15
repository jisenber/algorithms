let Node = require('./dll-node.js');


//Doubly linked list implementation
let Dll = module.exports = function() {
  this.head = null;
  this.tail = null;
};

//add a node to the end of a doubly linked list
Dll.prototype.append = function(val) {
  if(!val) return false;
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = node;
    return;
  }
  let temp = this.tail;
  this.tail = node;
  this.tail.prev = temp;
  this.tail.prev.next = node;
  return;
};

//add a node to the begging of a doubly linked list
Dll.prototype.prepend = function(val) {
  if(!val) return false;
  let node = new Node(val);
  if(!this.head) {
    this.head = node;
    this.tail = node;
    return;
  }
  let temp = this.head;
  this.head = node;
  this.head.next = temp;
  this.head.next.prev = node;
};

Dll.prototype.pop = function() {
  if(!this.head) return false;
  if(!this.head.next) {
    let endVal = this.head.val;
    this.head = null;
    this.tail = null;
    return endVal;
  }
  let endNode = this.tail;
  this.tail = endNode.prev;
  this.tail.next = null;
  return endNode.val;
};

let dll = new Dll()
dll.append(1);
dll.append(2);
dll.append(3);
dll.pop();
dll.pop()
dll.pop()
console.log(dll);
