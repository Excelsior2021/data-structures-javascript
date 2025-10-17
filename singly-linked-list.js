class Node {
  next = null

  constructor(data) {
    this.data = data
  }
}

class SLinkedList {
  #head = null
  #size = 0

  //constant time O(1)
  get head() {
    return this.#head
  }

  //constant time O(1)
  get size() {
    return this.#size
  }

  //linear time O(n)
  #traverse(index) {
    if (index >= this.#size) throw new Error("index beyond bounds of list")
    let current_node = this.#head
    for (let i = 1; i < index; ++i) current_node = current_node.next
    return current_node
  }

  //constant time O(1)
  add_front(new_node) {
    new_node.next = this.#head
    this.#head = new_node
    this.#size++
  }

  //linear time O(n)
  add_back(new_node) {
    if (this.#head === null) this.#head = new_node
    else {
      let current_node = this.#head
      while (current_node.next !== null) current_node = current_node.next
      current_node.next = new_node
    }
    this.#size++
  }

  //linear time O(n)
  insert(new_node, index) {
    if (index === 0) this.add_front(new_node)
    else {
      let current_node = this.#traverse(index)
      let detached = current_node.next
      current_node.next = new_node
      new_node.next = detached
      this.#size++
    }
  }

  //linear time O(n)
  delete(index) {
    if (index === 0) this.#head = this.#head.next
    else {
      let node_before_node_to_delete = this.#traverse(index)
      node_before_node_to_delete.next = node_before_node_to_delete.next.next
    }
    this.#size--
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
