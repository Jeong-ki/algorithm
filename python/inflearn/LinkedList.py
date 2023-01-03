class Node:
	def __init__(self, value = 0, next = None):
		self.value = value
		self.next = next

class LinkedList(object):
  def __init__(self):
    self.head = None
    self.tail = None

  def append(self, value):
    new_node = Node(value)
    if self.head is None:
      self.head = new_node
      self.tail = new_node
    else:
      self.tail.next = new_node
      self.tail = self.tail.next

  def get(self, idx):
    current = self.head
    for _ in range(idx):
      current = current.next
    return current.value

  def insert(self, idx, value):
    new_node = Node(value)
    current = self.head
    for _ in range(idx - 1):
      current = current.next
    new_node.next = current.next
    current.next = new_node

  def remove(self, idx):
    current = self.head
    for _ in range(idx - 1):
      current = current.next
    current.next = current.next.next


li = LinkedList()
li.append(1)
li.append(2)
li.append(3)
li.append(4)
li.get(0)
li.get(1)
li.get(3)
li.insert(idx = 2, value = 9)