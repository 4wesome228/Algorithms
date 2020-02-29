class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    const nodeIdx = this.children.findIndex(node => node.data === data);
    this.children = [
      ...this.children.slice(0, nodeIdx),
      ...this.children.slice(nodeIdx + 1)
    ];
  }
}

module.exports = Node;
