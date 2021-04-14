const {DoublyLinkedList} = require('./linkedlist')

class Queue{
    constructor(){
        this.queue = new DoublyLinkedList
        this.size = 0
    }
    insert(value){
        this.queue.insert(value)
        this.size++
        return this
    }
    remove(){
        if (this.size > 0){
            this.size--
            return this.queue.popHead()
        }else return null
    }
    peek(){
        return this.queue.head
    }
    getSize(){
        return this.size
    }
}

const TestQueue = new Queue
TestQueue.insert(10).insert(15).insert(12)
console.log(TestQueue)
console.log(TestQueue.remove()), 
console.log(TestQueue.peek(), TestQueue.getSize())