import Node from "./node.js"
import SLinkedList from "./singly-linked-list.js"

export default class Stack {
  #stack
  #size = 0

  constructor() {
    this.#stack = new SLinkedList()
  }

  #empty_stack() {
    if (this.#size === 0) {
      console.log("stack is empty")
      return true
    } else return false
  }

  push(item) {
    this.#stack.add_front(new Node(item))
    this.#size++
  }

  pop() {
    if (this.#empty_stack()) return
    const item = this.#stack.access(0)
    this.#stack.delete(0)
    this.#size--
    return item
  }

  peek() {
    if (this.#empty_stack()) return
    const item = this.#stack.access(0).data
    return item
  }
}
