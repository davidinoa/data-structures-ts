export default class Queue<V = number> {
  private storage: { [index: string]: V };
  private start: number;
  private end: number;
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }

  enqueue(value: V) {
    this.storage[this.end] = value
    this.end += 1
  }

  dequeue() {
    if (this.size()) {
      const target = this.storage[this.start]
      delete this.storage[this.start]
      this.start += 1
      return target
    }
  }
  size() {
    return this.end - this.start
  }
}
