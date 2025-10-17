export default class LinkedList {
  _head = null
  _tail = null
  _size = 0

  //constant time O(1)
  get head() {
    return this._head
  }

  //constant time O(1)
  get tail() {
    return this._tail
  }

  //constant time O(1)
  get size() {
    return this._size
  }

  _beyondBoundsError() {
    throw new Error("index beyond bounds of list")
  }

  //linear time O(n)
  _traverse(index) {
    if (index === undefined) throw new Error("invalid index")
    if (index >= this._size) this.this._beyondBoundsError()
    let current_node = this._head
    for (let i = 1; i < index; ++i) current_node = current_node.next
    return current_node
  }

  //linear time O(n)
  print() {
    let current_node = this._head
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
