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

  //constant time O(1)
  _validIndex(index) {
    if (index < 0 || !Number.isInteger(index)) throw new Error("invalid index")
  }

  //constant time O(1)
  _beyondBoundsError(index) {
    if (index >= this._size) throw new Error("index beyond bounds of list")
  }

  //constant time O(1)
  _first_node(new_node) {
    this._head = new_node
  }

  //linear time O(n)
  _traverse(index) {
    this._validIndex(index)
    this._beyondBoundsError(index)
    let current_node = this._head
    for (let i = 1; i < index; ++i) current_node = current_node.next
    return current_node
  }

  //linear time O(n)
  _traverse_backward(index, type) {
    this._validIndex(index)
    this._beyondBoundsError(index)
    let current_node = this._tail
    let start_pos = this._size - (type === "insert" ? 1 : 2)
    for (let i = start_pos; i > index; --i) current_node = current_node.prev
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
