let Stack = require('../stacks/stack');
let expect = require('chai').expect;
let stack = new Stack();

describe('a stack data structure', () => {
  before(function() {
    while(stack.size >= 1) {
      stack.pop(); //empties the stack each time.
    }
  });
  it('should have a null top value upon instantiation', () => {
    expect(stack.top).to.deep.equal(null); //deep equal necessary in this case
  });
  describe('the push method of a stack', () => {
    it('should add a new node to the top of a stack', () => {
      stack.push(1);
      expect(stack.top.val).to.equal(1);
    });
    it('should keep a top\'s reference to the next node below it', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.top.next.val).to.equal(1);
    });
  });
  describe('the pop method of a stack', () => {
    it('should remove the top node of a stack', () => {
      stack.push(1);
      stack.push(2);
      let topVal = stack.pop();
      expect(topVal).to.equal(2);
    });
    it('should reassign the top value of a stack after removing the uppermost node', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.top.val).to.equal(2);
      stack.pop();
      console.log(stack);
      expect(stack.top.val).to.equal(1);
    });
  });
});
