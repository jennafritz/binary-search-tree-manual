class Node {
  constructor(value, left = null, right = null) {
    // add your Node class code
    this.value = value
    this.left = left
    this.right = right
  }
}

// list = [1, 4, 7]
function oneToSeven() {
  // manually create the BST
  let left = new Node(1)
  let right = new Node(7)
  let root = new Node(4, left, right)

  // then return the root node
  return root
}

// list = [10, 40, 45, 46, 50]
function tenToFifty() {
  let leftmost = new Node(10)
  let left = new Node(40, leftmost, null)
  let rightmost = new Node(50)
  let right = new Node(46, null, rightmost)
  let root = new Node(45, left, right)

  return root  
}

// list = [-20, -19, -17, -15, 0, 1, 2, 10]
function negativeToPositive() {
let rightRight = new Node(10)
let rightLeft = new Node(1)
let right = new Node(2, rightLeft, rightRight)
let leftLeftLeft = new Node(-20)
let leftLeft = new Node(-19, leftLeftLeft, null)
let leftRight = new Node(-15)
let left = new Node(-17, leftLeft, leftRight)
let root = new Node(0, left, right) 
return root
}

if (require.main === module) {
  // add your own tests in here if you want
}

module.exports = {
  Node,
  oneToSeven,
  tenToFifty,
  negativeToPositive
};

// Please add your pseudocode to this file
// And a written explanation of your solution
