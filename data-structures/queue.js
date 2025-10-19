import DLinkedList from "./doubly-linked-list.js"
import Node from "./node.js"

export default class Queue {
  #list
  #size = 0
  constructor() {
    this.#list = new DLinkedList()
  }

  get size() {
    return this.#size
  }

  #empty_queue() {
    if (this.#size === 0) {
      console.log("queue is empty")
      return true
    } else return false
  }

  enqueue(item) {
    this.#list.add_back(new Node(item))
    this.#size++
  }

  dequeue() {
    if (this.#empty_queue()) return
    const item = this.#list.access(0).data
    this.#list.delete(0)
    this.#size--
    return item
  }

  peek() {
    if (this.#empty_queue()) return
    const item = this.#list.access(0).data
    return item
  }
}
