export type Pointer = Node | null

export class Node {
  value: number
  next: Pointer
  constructor(input: number) {
    this.value = input
    this.next = null
  }
}

export class List {
  head: Pointer
  tail: Pointer
  constructor() {
    this.head = null
    this.tail = null
  }

  addToTail(value: number) {
    const newTail = new Node(value)
    if (!this.head) {
      this.head = newTail
    }
    if (this.tail) {
      this.tail.next = newTail
    }
    this.tail = newTail
  }

  removeHead() {
    const currentHead = this.head
    if (!this.head) {
      return null
    }
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next;
    }
    return (currentHead as Node).value
  }

  contains(target: number) {
    let node = this.head
    while (node) {
      if (node.value === target) {
        return true
      }
      node = node.next
    }
    return false
  }
}