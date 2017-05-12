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
  this.tail.prev = node;
  this.tail = node;
  return;
};

Queue.prototype.dequeue = function() {
  if(!this.head) return;
  if(!this.head.prev && !this.tail.prev) {
    //in case the queue only has one node in it...
    let temp = this.head;
    this.head = null;
    this.tail = null;
    return temp.val;
  }
  let temp = this.head;
  this.head = this.head.prev;
  return temp.val;
};


Queue.prototype.peek = function() {
  if(!this.head) return;
  return this.head.val;
};
