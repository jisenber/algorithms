let Stack = require('../stacks/stack');
let Queue = require('../queues/queue');
let Tree = require('../trees/binary-search-tree');
let expect = require('chai').expect;
let stack = new Stack();
let q = new Queue();
let tree = new Tree()


describe('a binary search tree', () => {
  describe('the insert method', () => {
    it('should establish the root of a tree if there is no node present on the tree', () => {
      expect(tree.root).to.deep.equal(null);
      tree.insert(10);
      expect(tree.root.val).to.equal(10);
    });
  });
});
