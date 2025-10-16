class CircularArray {
  #front = 0
  #back = 0
  #length
  #arr = new Array(this.#length)

  constructor(length) {
    this.#length = length
  }

  get front() {
    return this.#arr[(this.#front - 1) % this.#length]
  }

  get back() {
    return this.#arr[this.#length - ((this.#back - 1) % this.#length) - 1]
  }

  add_front(data) {
    this.#arr[this.#front++ % this.#length] = data
  }

  add_back(data) {
    this.#arr[this.#length - (this.#back++ % this.#length) - 1] = data
  }

  print() {
    console.log(this.#arr)
  }
}
