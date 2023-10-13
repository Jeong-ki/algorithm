class Node {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

let bt = new BinaryTree();
bt.root = new Node({ value: 1 });
bt.root.left = new Node({ value: 2 });
bt.root.right = new Node({ value: 3 });
bt.root.left.left = new Node({ value: 4 });
bt.root.left.right = new Node({ value: 5 });
bt.root.right.right = new Node({ value: 6 });


console.log(typeof bt);