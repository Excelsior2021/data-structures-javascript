class Node {
  prev = null
  next = null

  constructor(data) {
    this.data = data
  }
}

class DLinkedList {
  #head = null
  #tail = null
  #length = 0

  #first_node(new_node) {
    this.#head = new_node
    this.#tail = new_node
  }

  #traverse_forward(index) {
    let current_node = this.#head
    for (let i = 1; i < index; ++i) current_node = current_node.next
    return current_node
  }

  #traverse_backward(index, type) {
    let current_node = this.#tail
    let start_pos = this.#length - (type === "insert" ? 1 : 2)
    for (let i = start_pos; i > index; --i) current_node = current_node.prev
    return current_node
  }

  add_front(new_node) {
    if (this.#head === null) this.#first_node(new_node)
    else {
      this.#head.prev = new_node
      new_node.next = this.#head
      this.#head = new_node
    }
    this.#length++
  }

  add_back(new_node) {
    if (this.#head === null) this.#first_node(new_node)
    else {
      this.#tail.next = new_node
      new_node.prev = this.#tail
      this.#tail = new_node
    }
    this.#length++
  }

  insert(new_node, index) {
    if (index >= this.#length) throw new Error("index beyond bounds of list")
    if (index === 0) this.add_front(new_node)
    else {
      if (index / this.#length <= 0.5) {
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
      this.#length++
    }
  }

  delete(index) {
    if (index >= this.#length) throw new Error("index beyond bounds of list")
    if (index === 0) this.#head = this.#head.next
    else if (index === this.#length - 1) this.#tail = this.#tail.prev
    else {
      if (index / this.#length <= 0.5) {
        let node_before_node_to_delete = this.#traverse_forward(index)
        node_before_node_to_delete.next = node_before_node_to_delete.next.next
        node_before_node_to_delete.next.prev = node_before_node_to_delete
      } else {
        let node_after_node_to_delete = this.#traverse_backward(index, "delete")
        node_after_node_to_delete.prev = node_after_node_to_delete.prev.prev
        node_after_node_to_delete.prev.next = node_after_node_to_delete
      }
    }
    this.#length--
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

const list = new DLinkedList()

list.add_front(new Node(1))
list.add_front(new Node(2))
list.add_front(new Node(3))
list.add_front(new Node(4))
list.add_front(new Node(5))
list.add_front(new Node(6))
list.add_front(new Node(7))
list.add_front(new Node(8))

list.insert(new Node(45), 7)
// list.delete(3)
// list.delete(5)

list.print()
