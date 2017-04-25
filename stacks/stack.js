let Node = require('./node.js');

//implementation of a stack
let Stack = module.exports = function() {
  this.top = null;
  this.size = 0;
};

//add to the end of a stack.
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
Stack.prototype.pop = function(val) {
  if(!val || !this.size) return false;
  let temp = this.top.val;
  this.top = this.top.prev;
  this.size -= 1;
  return temp;
};
