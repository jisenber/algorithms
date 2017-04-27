//Implementation of a queue - first in first out
let Node = require('./node');

let Queue = module.exports = function() {
  this.head = null;
  this.tail = null;
};

Queue.prototype.enqueue = function(val) {
  if(!val) return false;
  let node = new Node(val);
  if (!this.tail) {
    this.head = node;
    this.tail = node;
    return;
  }
  let temp = this.tail;
  this.tail = node;
  this.tail.prev = temp;
  return;
};

Queue.prototype.dequeue = function() {
  if(!this.head) return false;
  let temp = this.head;
  this.head = this.head.next;
  return temp.val;
};
