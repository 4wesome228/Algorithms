const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(record) {
    this.insertAt(record, 0);
    //this.head = new Node(record, this.head);
  }

  size() {
    let node = this.head;
    let counter = 0;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.getAt(0);
    // return this.head;
  }

  getLast() {
    return this.getAt(this.size() - 1);
    /* let node = this.head;
    if (!node) return null;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    } */
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }
    this.removeAt(this.getLast());
    /* let previous = this.head;
    let nextNode = this.head.next;
    while (nextNode.next) {
      previous = nextNode;
      nextNode = nextNode.next;
    }
    previous.next = null; */
  }

  insertLast(record) {
    const lastNode = this.getLast();
    const newNode = new Node(record);
    if (lastNode) lastNode.next = newNode;
    else {
      this.head = newNode;
    }
  }

  getAt(idx) {
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      node = node.next;
    }
    return node;
  }

  removeAt(idx) {
    if (!this.head) return;

    if (idx === 0) {
      this.head = this.head.next;
      return;
    }

    const nodeBefore = this.getAt(idx - 1);
    if (!nodeBefore || !nodeBefore.next) {
      return;
    }
    nodeBefore.next = nodeBefore.next.next;
  }

  insertAt(data, idx) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (idx === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(idx - 1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

const list = new LinkedList();

/* list.insertFirst(55);
list.insertFirst("454");
list.insertLast(111); */
/* for (let node of list) {
  node.data += 10;
}*/
//console.log(list.getLast());

module.exports = LinkedList;
