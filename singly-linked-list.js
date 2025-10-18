import LinkedList from "./linked-list.js"

export default class SLinkedList extends LinkedList {
  //linear time O(n)
  access(index) {
    if (index >= this._size) this._beyondBoundsError()
    else if (index === 0) return this.head
    else {
      let current_node = this.head.next
      for (let i = 1; i < index; ++i) current_node = current_node.next
      return current_node
    }
  }

  //constant time O(1)
  add_front(new_node) {
    if (this._head === null) this._first_node(new_node)
    else {
      new_node.next = this._head
      this._head = new_node
    }
    this._size++
  }

  //linear time O(n)
  add_back(new_node) {
    if (this._head === null) this._first_node(new_node)
    else {
      let current_node = this._head
      while (current_node.next !== null) current_node = current_node.next
      current_node.next = new_node
    }
    this._size++
  }

  //linear time O(n)
  insert(new_node, index) {
    this._validIndex(index)
    this._beyondBoundsError(index)
    if (index === 0) this.add_front(new_node)
    else {
      const current_node = this._traverse(index)
      const detached = current_node.next
      current_node.next = new_node
      new_node.next = detached
      this._size++
    }
  }

  //linear time O(n)
  delete(index) {
    this._validIndex(index)
    this._beyondBoundsError(index)
    if (index === 0) this._head = this._head.next
    else {
      const node_before_node_to_delete = this._traverse(index)
      node_before_node_to_delete.next = node_before_node_to_delete.next.next
    }
    this._size--
  }
}
