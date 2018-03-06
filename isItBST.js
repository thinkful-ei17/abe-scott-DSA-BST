const BST = require('./bst');
/*

if we start at the top of our tree
and we say, if this.left is > this.right
we return false
then we call it recursively.

(if the left side is ever bigger than the right side we return false)
*/

/* eslint-disable */
function isBST(tree) {
  if (!tree) {
    return false;
  }
  if(tree.left){
    if(this.key > tree.left.key){
      isBST(tree.left);
    } else {
      return false;
    }
  }

  if(tree.right){
    if(this.key < tree.right.key){
      isBST(tree.right);
    } else {
      return false
    }
  }

  return true;
}

const bst = new BST();
bst.insert(5);
bst.insert(2);
bst.insert(8);
bst.insert(9);
bst.insert(7);

console.log(isBST(bst));


