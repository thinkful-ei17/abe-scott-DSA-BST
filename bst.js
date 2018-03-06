/* eslint-disable */
class BST {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // figure out if there is a root
    if (this.key === null) {
      // there is no tree
      console.log('root: ', key);
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      // if this.key is less than
      // go left. Does this.left exist?
      if (this.left === null) {
        console.log(`left of ${this.key}: ${key}`)
        this.left = new BST(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else if (key >= this.key) {
      if (this.right === null) {
        console.log(`right of ${this.key}:  ${key}`)
        this.right = new BST(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
}

const bst = new BST();
const word = 'EASYQUESTION';
console.log(word.charCodeAt(0));

for(let i = 0; i < word.length; i++){
  bst.insert(word[i]);
}

