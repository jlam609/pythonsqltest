class BST {
  constructor(value) {
    this.value = value ? value : 0;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    let node = new BST(value);
    if (!this.value) {
      this.value = value;
    } else if (value < this.value) {
      if (!this.left) this.left = node;
      else this.left.insert(value);
    } else {
      if (!this.right) this.right = node;
      else this.right.insert(value);
    }
    return this;
  }
  contains(value) {
    if (!this.value) return false;
    else if (value == this.value) return true;
    else if (value < this.value) {
      if (this.left) return this.left.contains(value);
    } else {
      if (this.right) return this.right.contains(value);
    }
    return false;
  }
  delete(value, parent = null) {
    if (!this.value) return;
    if (value < this.value) {
      if (this.left) this.left.delete(value, this);
    } else if (value > this.value) {
      if (this.right) this.right.delete(value, this);
    } else {
      if (this.right && this.left) {
        this.value = this.right.getMinValue();
        this.right.delete(this.value, this);
      } else if (parent == null) {
        if (this.left) {
          this.value = this.left;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          this.value = this.right;
          this.left = this.right.left;
          this.right = this.right.right;
        }
      } else if (parent.left == this) {
          parent.left = this.left ? this.left : this.right
      }else if (parent.right == this){
          parent.right = this.left ? this.left : this.right
      }
    }
    return this
  }
  getMinValue() {
    if (this.left) {
      return this.left.getMinValue();
    } else {
      return this.value;
    }
  }
}

let TestTree = new BST()
TestTree.insert(10).insert(5).insert(2).insert(12).insert(20).insert(15)
console.log(TestTree.contains(5))
TestTree.delete(10)
TestTree.delete(2)
console.log(TestTree)
