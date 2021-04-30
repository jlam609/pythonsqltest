class Node:
    def __init__(self, data=None, next=None, prev = None):
        self.data = data
        self.next = next
        self.prev = prev

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    def to_list(self):
        l = []
        if not self.head:
            return l
        node = self.head
        while node:
            l.append(node.data)
            node = node.next
        return l
    def print_ll(self):
        ll_string = ''
        node = self.head
        if not node:
            print(None)
        while node:
            ll_string+= f'{str(node.data)} -> '
            node = node.next
        ll_string += ' None'
        print(ll_string)
    def insert_beginning(self,data):
        if not self.head:
            self.head = Node(data)
            self.tail = self.head
            return

        node = Node(data, self.head)
        self.head.prev = node
        self.head = node
    def insert_at_end(self, data):
        if not self.head:
            self.insert_beginning(data)
            return
        self.tail.next = Node(data, None, self.tail)
        self.tail = self.tail.next
    def get_user_by_id(self, user_id):
        node = self.head
        while node:
            if node.data['id'] is int(user_id):
                return node.data
            node = node.next
        return None