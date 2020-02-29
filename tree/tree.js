const Node = require("./node");

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arrOFNodes = [this.root];
    while (arrOFNodes.length) {
      const node = arrOFNodes.shift();
      arrOFNodes.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arrOFNodes = [this.root];
    while (arrOFNodes.length) {
      const node = arrOFNodes.shift();
      arrOFNodes.unshift(...node.children);
      fn(node);
    }
  }

  levelWidth(root) {
    const arrOFNodes = [root, "new_line"];
    const widths = [0];
    while (arrOFNodes.length !== 1) {
      const node = arrOFNodes.shift();
      //if new_ine then line is over and we need to create another counter in widths array and set it to 0
      //and then push new_line to the end
      if (node === "new_line") {
        widths.push(0);
        arrOFNodes.push("new_line");
      } else {
        arrOFNodes.push(...node.children);
        widths[widths.length - 1]++;
      }
    }

    return widths;
  }
}

const node = new Node(50);
node.add(10);
node.add(20);
const tree = new Tree();
tree.root = node;
node.children[0].add(100);
node.children[0].add(120);
node.children[0].add(110);
node.children[1].add(15);
node.children[1].add(25);
node.children[1].add(16);
node.children[1].add(11);
node.children[1].add(2);
//tree.traverseDF(node => (node.data += 10));
console.log(tree.levelWidth(tree.root));
