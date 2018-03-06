'use strict';
const BST = require('./bst');

function findHeight(tree){
    //base case:
    if(!tree){
        return 0;
    }

    const left = 1 + findHeight(tree.left);
    const right = 1 + findHeight(tree.right);
 
    console.log('finding max of left:', left, 'right:', right);
    return Math.max(left, right);
}


// const newTree = new BST();

// newTree.insert(5, null);             
// newTree.insert(2, null);
// newTree.insert(3, null);
// newTree.insert(12, null);
// newTree.insert(8);
// newTree.insert(8);
// newTree.insert(8);

const bst = new BST();
const word = 'EASYQUESTION';
// console.log(word.charCodeAt(0));

for(let i = 0; i < word.length; i++){
  bst.insert(word[i]);
}

console.log(findHeight(bst));