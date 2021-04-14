class Stack {
  constructor() {
    this.stack = [];
  }
  insert(value) {
    this.stack.push(value);
    return this
  }
  remove() {
    if (this.stack.length) {
      return this.stack.pop();
    }else return null
  }
  getSize(){
      return this.stack.length
  }
  peek(){
      return this.stack[this.stack.length-1]
  }
}
const TestStack = new Stack
TestStack.insert(10).insert(15).insert(20).insert(5).insert(12)
console.log(TestStack)
console.log(TestStack.remove(), TestStack.peek())
console.log(TestStack.getSize())

