class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let newNode = new Node(value);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
  }

  get(idx) {
    let current = this.head;

    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    console.log(current.value);
    return current.value;
  }

  insertAt(idx, value) {
    let current = this.head;
    let newNode = new Node(value);

    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  removeAt(idx) {
    let current = this.head;

    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }


}

let ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.insertAt(2, 11)
ll.removeAt(3)
ll.get(0);
ll.get(1);
ll.get(2);
ll.get(3);