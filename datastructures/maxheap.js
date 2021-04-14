class MaxHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }
  siftUp(idx) {
    let parentIdx = Math.floor((idx - 1) / 2);
    while (idx >= 0 && this.heap[parentIdx] < this.heap[idx]) {
      this.swap(idx, parentIdx, this.heap);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
    return this;
  }
  siftDown(parentIdx, endIdx, heap) {
    let child1Idx = parentIdx * 2 + 1;
    while (child1Idx <= endIdx) {
      let child2Idx = parentIdx * 2 + 2 <= endIdx ? parentIdx * 2 + 2 : null;
      let largerIdx;
      if (child2Idx && heap[child2Idx] > heap[child1Idx]) {
        largerIdx = child2Idx;
      } else {
        largerIdx = child1Idx;
      }
      if (heap[largerIdx] > heap[parentIdx]) {
        this.swap(largerIdx, parentIdx, heap);
        parentIdx = largerIdx;
        child1Idx = parentIdx * 2 + 1;
      }else{
          return this
      }
    }
    return this;
  }
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    let temp = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return temp;
  }
  swap(idx1, idx2, arr) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  buildHeap(array) {
    let parentIdx = Math.floor((array.length-1) / 2);
    for (let i = parentIdx; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array);
    }
    return array;
  }
  peek() {
    return this.heap[0];
  }
}

let PracticeHeap = new MaxHeap([5, 3, 2, 10, 20, 30, 6, 70, 80, 11, 12, 90]);
console.log(PracticeHeap);
PracticeHeap.insert(25);
console.log(PracticeHeap);
PracticeHeap.insert(100);
console.log(PracticeHeap);
PracticeHeap.remove(100);
console.log(PracticeHeap);
