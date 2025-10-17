import LinkedList from "./linked-list.js"

export default class DLinkedList extends LinkedList {
  //constant time O(1)
  #first_node(new_node) {
    this._head = new_node
    this._tail = new_node
  }

  //linear time O(n)
  #traverse_backward(index, type) {
    if (index >= this._size) this._beyondBoundsError()
    let current_node = this._tail
    let start_pos = this._size - (type === "insert" ? 1 : 2)
    for (let i = start_pos; i > index; --i) current_node = current_node.prev
    return current_node
  }

  //linear time O(n)
  access(index) {
    if (index >= this._size) this._beyondBoundsError()
    else if (index === 0) return this._head
    else if (index === this._size - 1) return this._tail
    else {
      if (index / this._size <= 0.5) {
        let current_node = this._head.next
        for (let i = 1; i < index; ++i) current_node = current_node.next
        return current_node
      } else {
        let current_node = this._tail.prev
        for (let i = this._size - 2; i > index; --i)
          current_node = current_node.prev
        return current_node
      }
    }
  }

  //constant time O(1)
  add_front(new_node) {
    if (this._head === null) this.#first_node(new_node)
    else {
      this._head.prev = new_node
      new_node.next = this._head
      this._head = new_node
    }
    this._size++
  }

  //constant time O(1)
  add_back(new_node) {
    if (this._head === null) this.#first_node(new_node)
    else {
      this._tail.next = new_node
      new_node.prev = this._tail
      this._tail = new_node
    }
    this._size++
  }

  //linear time O(n)
  insert(new_node, index) {
    if (index >= this._size) this._beyondBoundsError()
    if (index === 0) this.add_front(new_node)
    else {
      if (index / this._size <= 0.5) {
        let current_node = this._traverse(index)
        let detached = current_node.next
        current_node.next = new_node
        new_node.next = detached
        new_node.prev = current_node
        detached.prev = new_node
      } else {
        let current_node = this.#traverse_backward(index, "insert")
        let detached = current_node.prev
        current_node.prev = new_node
        new_node.prev = detached
        new_node.next = current_node
        detached.next = new_node
      }
      this._size++
    }
  }

  //linear time O(n)
  delete(index) {
    if (index >= this._size) this._beyondBoundsError()
    if (index === 0) this._head = this._head.next
    else if (index === this._size - 1) {
      this._tail = this._tail.prev
      this._tail.next = null
    } else {
      if (index / this._size <= 0.5) {
        let node_before_node_to_delete = this._traverse(index)
        node_before_node_to_delete.next = node_before_node_to_delete.next.next
        node_before_node_to_delete.next.prev = node_before_node_to_delete
      } else {
        let node_after_node_to_delete = this.#traverse_backward(index, "delete")
        node_after_node_to_delete.prev = node_after_node_to_delete.prev.prev
        node_after_node_to_delete.prev.next = node_after_node_to_delete
      }
    }
    this._size--
  }
}
