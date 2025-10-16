class Node {
  next = null

  constructor(data) {
    this.data = data
  }
}

class SLinkedList {
  #head = null

  get head() {
    return this.#head
  }

  #traverse(index) {
    let current_node = this.#head
    for (let i = 1; i < index; ++i) {
      current_node = current_node.next
      if (current_node == null) throw new Error("index beyond bounds of list")
    }
    return current_node
  }

  add_front(node) {
    node.next = this.#head
    this.#head = node
  }

  add_back(new_node) {
    let node = this.#head
    while (node.next !== null) {
      node = node.next
    }
    node.next = new_node
  }

  insert(new_node, index) {
    if (index === 0) this.add_front(new_node)
    else {
      let current_node = this.#traverse(index)
      let detached = current_node.next
      current_node.next = new_node
      new_node.next = detached
    }
  }

  delete(index) {
    if (index === 0) this.#head = this.#head.next
    else {
      let node_before_node_to_delete = this.#traverse(index)
      node_before_node_to_delete.next = node_before_node_to_delete.next.next
    }
  }

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
