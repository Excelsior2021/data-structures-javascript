import Node from "./node.js"
import SLinkedList from "./singly-linked-list.js"

export default class Stack {
  #list
  #size = 0

  constructor() {
    this.#list = new SLinkedList()
  }

  get size() {
    return this.#size
  }

  #empty_stack() {
    if (this.#size === 0) {
      console.log("stack is empty")
      return true
    } else return false
  }

  push(item) {
    this.#list.add_front(new Node(item))
    this.#size++
  }

  pop() {
    if (this.#empty_stack()) return
    const item = this.#list.access(0)
    this.#list.delete(0)
    this.#size--
    return item
  }

  peek() {
    if (this.#empty_stack()) return
    const item = this.#list.access(0).data
    return item
  }
}
