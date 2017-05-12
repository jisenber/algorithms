let Queue = require('../queues/queue');
let expect = require('chai').expect;
let q = new Queue();

describe('a queue data structure', () => {
  afterEach(() => {
    while(q.head) {
      q.dequeue();
    }
  });
  it('has head and tail properties', () => {
    expect(q.head).to.deep.equal(null);
    expect(q.tail).to.deep.equal(null);
  });
  describe('the enqueue method', () => {
    it('should add a node to the tail of a queue', () => {
      q.enqueue(1);
      expect(q.tail.val).to.equal(1);
    });
    it('should reassign tail when another node is added, keeping the head the same', () => {
      q.enqueue(1);
      q.enqueue(2);
      expect(q.tail.val).to.equal(2);
      expect(q.head.val).to.equal(1);
    });
  });
  describe('the dequeue method', () => {
    it('should remove the value from the head of queue and return it', () => {
      q.enqueue(1);
      q.enqueue(2);
      let head = q.dequeue();
      expect(head).to.equal(1);
    });
    it('should reassign the head of the queue after it remove a node', () => {
      q.enqueue(5);
      q.enqueue(6);
      expect(q.head.val).to.equal(5);
      q.dequeue();
      expect(q.head.val).to.equal(6);
    });
  });
  describe('the peek method', () => {
    it('should return the value of the head node of a queue without removing it', () => {
      q.enqueue(1);
      q.enqueue(2);
      expect(q.head.val).to.equal(1);
      let one = q.peek();
      expect(one).to.equal(1);
      expect(q.head.val).to.equal(1);
    });
  });
});
