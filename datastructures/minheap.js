class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }
  siftUp(idx) {
    let parentIdx = Math.floor((idx - 1) / 2);
    while (idx > 0 && this.heap[idx] < this.heap[parentIdx]) {
      this.swap(idx, parentIdx, this.heap);
      idx = parentIdx
      parentIdx = Math.floor((idx - 1) / 2);
    }
    return this;
  }
  siftDown(parentIdx, endIdx, heap) {
    let child1idx = parentIdx * 2 + 1;
    while (child1idx <= endIdx) {
      let child2idx = parentIdx * 2 + 2 <= endIdx ? parentIdx * 2 + 2 : null;
      let smallerIdx;
      if (child2idx && heap[child2idx] < heap[child1idx]) {
        smallerIdx = child2idx;
      } else {
        smallerIdx = child1idx;
      }
      if (heap[smallerIdx] < heap[parentIdx]) {
        this.swap(smallerIdx, parentIdx, heap);
        parentIdx = smallerIdx
        child1idx = parentIdx * 2 + 1
      }else{
          return this
      }
    }
    return this;
  }
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    let temp = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return temp;
  }
  peek() {
    return this.heap[0];
  }
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }
  buildHeap(array) {
    let firstParentIdx = Math.floor((array.length - 1) / 2);
    for (let i = firstParentIdx; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }
  swap(idx1, idx2, heap) {
    let temp = heap[idx1];
    heap[idx1] = heap[idx2];
    heap[idx2] = temp;
  }
}

const PracticeHeap = new MinHeap([50, 30, 20, 10, 15, 5, 70, 90, 60]);
console.log(PracticeHeap);
PracticeHeap.remove();
console.log(PracticeHeap);
PracticeHeap.insert(4);
console.log(PracticeHeap);
