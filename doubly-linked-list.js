class DLinkedList {
  #head = null
  #tail = null
  #size = 0

  //constant time O(1)
  get head() {
    return this.#head
  }

  //constant time O(1)
  get tail() {
    return this.#tail
  }

  //constant time O(1)
  get size() {
    return this.#size
  }

  //constant time O(1)
  #first_node(new_node) {
    this.#head = new_node
    this.#tail = new_node
  }

  //linear time O(n)
  #traverse_forward(index) {
    if (index >= this.#size) throw new Error("index beyond bounds of list")
    let current_node = this.#head
    for (let i = 1; i < index; ++i) current_node = current_node.next
    return current_node
  }

  //linear time O(n)
  #traverse_backward(index, type) {
    if (index >= this.#size) throw new Error("index beyond bounds of list")
    let current_node = this.#tail
    let start_pos = this.#size - (type === "insert" ? 1 : 2)
    for (let i = start_pos; i > index; --i) current_node = current_node.prev
    return current_node
  }

  //linear time O(n)
  access(index) {
    if (index >= this.#size) throw new Error("index beyond bounds of list")
    else if (index === 0) return this.head
    else {
      let current_node = this.head.next
      for (let i = 1; i < index; ++i) current_node = current_node.next
      return current_node
    }
  }

  //constant time O(1)
  add_front(new_node) {
    if (this.#head === null) this.#first_node(new_node)
    else {
      this.#head.prev = new_node
      new_node.next = this.#head
      this.#head = new_node
    }
    this.#size++
  }

  //constant time O(1)
  add_back(new_node) {
    if (this.#head === null) this.#first_node(new_node)
    else {
      this.#tail.next = new_node
      new_node.prev = this.#tail
      this.#tail = new_node
    }
    this.#size++
  }

  //linear time O(n)
  insert(new_node, index) {
    if (index >= this.#size) throw new Error("index beyond bounds of list")
    if (index === 0) this.add_front(new_node)
    else {
      if (index / this.#size <= 0.5) {
        let current_node = this.#traverse_forward(index)
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
      this.#size++
    }
  }

  //linear time O(n)
  delete(index) {
    if (index >= this.#size) throw new Error("index beyond bounds of list")
    if (index === 0) this.#head = this.#head.next
    else if (index === this.#size - 1) this.#tail = this.#tail.prev
    else {
      if (index / this.#size <= 0.5) {
        let node_before_node_to_delete = this.#traverse_forward(index)
        node_before_node_to_delete.next = node_before_node_to_delete.next.next
        node_before_node_to_delete.next.prev = node_before_node_to_delete
      } else {
        let node_after_node_to_delete = this.#traverse_backward(index, "delete")
        node_after_node_to_delete.prev = node_after_node_to_delete.prev.prev
        node_after_node_to_delete.prev.next = node_after_node_to_delete
      }
    }
    this.#size--
  }

  //linear time O(n)
  print() {
    let current_node = this.#head
    let listStr = "["
    while (current_node !== null) {
      if (current_node.next === null) listStr += `${current_node.data}`
      else listStr += `${current_node.data}, `
      current_node = current_node.next
    }
    listStr += "]"
    console.log(listStr)
  }
}
