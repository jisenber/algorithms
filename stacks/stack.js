let Node = require('./node.js');

//implementation of a stack - first in last out
let Stack = module.exports = function() {
  this.top = null;
  this.size = 0;
};

//add a node to the top of a stack
Stack.prototype.push = function(val) {
  if(!val) return false;
  if(!this.size) {
    this.top = new Node(val);
    this.size += 1;
    return;
  }
  this.top = new Node(val, this.top); //Trying to make it explicit
  this.size += 1;
};

//remove from the top of a stack
Stack.prototype.pop = function() {
  if(!this.size) return false;
  let temp = this.top.val;
  this.top = this.top.next;
  this.size -= 1;
  return temp;
};

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
