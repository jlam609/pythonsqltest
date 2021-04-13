// interface ListNode{
//     value: number;
//     next: ListNode;
//     prev: ListNode;
// }

// class ListNode{
//     constructor(value, next = null, prev = null){
//         this.value = value ? value:0
//         this.next = next ? next :null;
//         this.prev = prev ? prev :null;
//     }
// }
// interface DoublyLinkedList{
//     head:ListNode;
//     tail:ListNode;
// }
// class DoublyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null
//     }
//     insertAtHead(value:number){
//         let node = new ListNode(value)
//         this.head = node
//         this.tail = node
//         return this
//     }
//     insert(value:number){
//         if (!this.head) return this.insertAtHead(value)
//         let node = new ListNode(value)
//         this.tail.next = node
//         node.prev = this.tail
//         this.tail = node
//     }
//     insertBeforeValue(value:number, nodeValue:number ){
//         if (!this.head){
//             return this
//         }else if (this.head.value == nodeValue){
//             return this.insertAtHead(value)
//         }else{
//             let newNode = new ListNode(value)
//             let cur = this.head
//             while(cur){
//                 if (cur.value == nodeValue){
//                     let temp = cur.prev
//                     cur.prev = newNode
//                     newNode.next = cur
//                     newNode.prev = temp
//                 }
//             }
//             return this
//         }
//     }
//     deleteNode(value){
//         if (!this.head) return
//         let cur = this.head
//         while(cur){
//             if (cur.value == value){
//                 if (cur == this.head) this.head = this.head.next
//                 if (cur == this.tail) this.tail = this.tail.prev
//                 cur.prev.next = null
//                 cur.next.prev = null
//                 cur.next = null
//                 cur.prev = null
//             }
//             else cur = cur.next
//         }
//         return this
//     }
// }

// let newList = new DoublyLinkedList
// newList.insert(10)
// newList.insert(5)
// newList.insert(8)

console.log(newList)