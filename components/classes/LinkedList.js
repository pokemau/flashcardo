class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    // check if null
    if (!this.head) this.head = new Node(data);
    else {
      const newNode = new Node(data);
      let curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }

      curr.next = newNode;
      newNode.prev = curr;
      newNode.next = null;
    }
  }

  prepend(data) {
    if (!this.head) this.head = new Node(data);
    else {
      const newNode = new Node(data);
      let curr = this.head;

      this.head = newNode;
      curr.prev = newNode;

      newNode.next = curr;
    }
  }

  printList() {
    let curr = this.head;

    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}
