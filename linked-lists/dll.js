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
