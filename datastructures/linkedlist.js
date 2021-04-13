var ListNode = /** @class */ (function () {
    function ListNode(value, next, prev) {
        if (next === void 0) { next = null; }
        if (prev === void 0) { prev = null; }
        this.value = value ? value : 0;
        this.next = next ? next : null;
        this.prev = prev ? prev : null;
    }
    return ListNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
    }
    DoublyLinkedList.prototype.insertAtHead = function (value) {
        var node = new ListNode(value);
        this.head = node;
        this.tail = node;
        return this;
    };
    DoublyLinkedList.prototype.insert = function (value) {
        if (!this.head)
            return this.insertAtHead(value);
        var node = new ListNode(value);
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        return this
    };
    DoublyLinkedList.prototype.insertBeforeValue = function (value, nodeValue) {
        if (!this.head) {
            return this;
        }
        else if (this.head.value == nodeValue) {
            return this.insertAtHead(value);
        }
        else {
            var newNode = new ListNode(value);
            var cur = this.head;
            while (cur) {
                if (cur.value == nodeValue) {
                    var temp = cur.prev;
                    cur.prev = newNode;
                    newNode.next = cur;
                    newNode.prev = temp;
                }
            }
            return this;
        }
    };
    DoublyLinkedList.prototype.deleteNode = function (value) {
        if (!this.head)
            return;
        var cur = this.head;
        while (cur) {
            if (cur.value == value) {
                if (cur == this.head){
                    this.head = this.head.next;
                    this.head.prev = null;
                }else if (cur == this.tail){
                    this.tail = this.tail.prev;
                    this.tail.next = null
                }else {
                    cur.prev.next = null;
                    cur.next.prev = null;
                    cur.next = null;
                    cur.prev = null;
                }
                break;
            }
            else
                cur = cur.next;
        }
        return this;
    };
    DoublyLinkedList.prototype.containsNode = function (value) {
        if (!this.head) return false
        let cur = this.head
        while(cur){
            if (cur.value == value){
                return true
            }
            cur = cur.next
        }
        return false
    }
    return DoublyLinkedList;
}());
var newList = new DoublyLinkedList;
newList.insert(10);
newList.insert(5);
newList.insert(7).deleteNode(7).insert(8).deleteNode(10)
console.log(newList.containsNode(5))
console.log(newList);
