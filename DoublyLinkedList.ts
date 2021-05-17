interface ListNode {
  value: number
  prev?: ListNode
  next?: ListNode
}

export default class DoublyLinkedList {
  head?: ListNode
  tail?: ListNode

  setHead(node: ListNode) {
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.insertBefore(this.head, node)
    }
  }
  insertBefore(head: ListNode, node: ListNode) {
    throw new Error('Method not implemented.')
  }

  setTail(node: ListNode) {
    if (!this.tail) {
      this.head = node
      this.tail = node
    } else {
      this.insertAfter(this.tail, node)
    }
  }
  insertAfter(tail: ListNode, node: ListNode) {
    throw new Error('Method not implemented.')
  }

  removeBindings(node: ListNode) {
    if (node.prev) {
      node.prev.next === node.next
    }
    if (node.next) {
      node.next.prev = node.prev
    }
    delete node.prev
    delete node.next
  }

  contains(value: number) {
    let node = this.head
    while (node) {
      if (node.value === value) {
        return true
      }
      node = node.next
    }
    return false
  }
}
