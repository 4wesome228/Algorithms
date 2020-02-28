const LinkedList = require("./linked-list");

const list = new LinkedList();
list.insertFirst("1");
list.insertFirst("2");
list.insertFirst("3");
list.insertFirst("4");
list.insertFirst("5");

function midpoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
console.log(fromLast(list, 2));
