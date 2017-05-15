let Sll = require('../linked-lists/sll.js');
let Dll = require('../linked-lists/dll.js');
let expect = require('chai').expect;
let sll = new Sll();
let dll = new Dll();

describe('a singly linked list data structure', ()=> {
  afterEach(() => {
    while(sll.head) {
      sll.pop();
    }
  });
  it('should have a head node', () => {
    expect(sll.head).to.deep.equal(null);
  });
  describe('the append method', () => {
    it('should define the head if there if implemented on an empty linked list', () => {
      sll.append(1);
      expect(sll.head.val).to.equal(1);
    });
    it('should add successsive nodes to the end of the list, with each node having a pointer to the next node', () => {
      sll.append(2);
      sll.append(3);
      expect(sll.head.val).to.equal(2);
      expect(sll.head.next.val).to.equal(3);
    });
  });
  describe('the prepend method', () => {
    it('should add a node to the head of a linked list, thus re-defining the head each time', () => {
      sll.prepend(4);
      expect(sll.head.val).to.equal(4);
      sll.prepend(5);
      expect(sll.head.val).to.equal(5);
    });
    it('should turn the former head node into the node that is next following the head', () => {
      sll.prepend(6);
      expect(sll.head.val).to.equal(6);
      sll.prepend(7);
      expect(sll.head.next.val).to.equal(6);
    });
  });
  describe('the pop method I added', () => {
    it('should remove the last node from the list and return its value', () => {
      sll.append(1);
      sll.append(2);
      sll.append(3);
      let lastNode = sll.pop();
      expect(lastNode).to.equal(3);
      expect(sll.head.next.val).to.equal(2);
      expect(sll.head.next.next).to.deep.equal(null);
    });
    it('should return false if invoked on an empty list', () => {
      let nope = sll.pop();
      expect(nope).to.be.false;
    });
  });
});

describe('a doubly linked list data structure', () => {
  afterEach(() => {
    while(dll.head) {
      dll.pop();
    }
  });
  it('should have head and tail properties', () => {
    expect(dll.head).to.deep.equal(null);
    expect(dll.tail).to.deep.equal(null);
  });
  describe('the append method on a doubly linked list', () => {
    it('Should add a node to the end of a linked list thus defining the tail for each invokation', () => {
      dll.append(1);
      expect(dll.tail.val).to.equal(1);
    });
    it('should define the head when invoked on an empty linked list', () => {
      dll.append(2);
      expect(dll.head.val).to.equal(2);
    });
    it('should continue to re-define the tail when invoked in linked lists of any size', () => {
      dll.append(3);
      dll.append(4);
      expect(dll.tail.val).to.equal(4);
      dll.append(5);
      expect(dll.tail.val).to.equal(5);
    });
    it('should maintain appropriate next and prev references for each node added', () => {
      dll.append(6);
      dll.append(7);
      expect(dll.tail.prev.val).to.equal(6);
      expect(dll.head.next.val).to.equal(7);
    });
  });
  describe('the prepend method of a doubly linked list', () => {
    it('should defined the head of a doubly linked list every time', () => {
      dll.prepend(8);
      expect(dll.head.val).to.equal(8);
      dll.prepend(9);
      expect(dll.head.val).to.equal(9);
    });
    it('should maintain appropriate points to next and prev references for each node added', () => {
      dll.prepend(10);
      dll.prepend(9);
      expect(dll.head.next.val).to.equal(10);
      expect(dll.head.next.prev.val).to.equal(9);
    });
  });
  describe('the pop method I added', () => {
    it('should remove the tail node from a doubly linked list and return it\'s value', () => {
      dll.append(1);
      dll.append(2);
      expect(dll.tail.val).to.equal(2);
      let lastNode = dll.pop();
      expect(dll.tail.val).to.equal(1);
      expect(lastNode).to.equal(2);
    });
    it('should return false if invoked on an empty list', () => {
      let nope = dll.pop();
      expect(nope).to.be.false;
    });
  });
});
