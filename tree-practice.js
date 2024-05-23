const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  if (!rootNode) return null
  let curr = rootNode
  while (curr.left) {
    curr = curr.left
  }
  return curr.val
}

function findMaxBST(rootNode) {
  // Your code here
  if (!rootNode) return null
  let curr = rootNode
  while (curr.right) {
    curr = curr.right
  }
  return curr.val
}

function findMinBT(rootNode) {
  if (!rootNode) return null
  let min = rootNode.val
  let stack = [rootNode]

  while (stack.length > 0) {

    let node = stack.pop()
    console.log(node.val)

    if (node.val < min) {
      min = node.val
    }
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }

  return min

}

function findMaxBT(rootNode) {
  // Your code here
  if (!rootNode) return null
  let max = rootNode.val
  let stack = [rootNode]

  while (stack.length > 0) {

    let node = stack.pop()
    console.log(node.val)

    if (node.val > max) {
      max = node.val
    }
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }

  return max


}

function getHeight(rootNode) {
  // Your code here
  if (!rootNode) {
    return -1
  }
  if (!rootNode.left && !rootNode.right) {
    return 0
  }



  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right))

}

function balancedTree(rootNode) {
  debugger
  let queue = [rootNode]


while(queue.length){
  let node = queue.shift()

  let leftHeight = getHeight(node.left)
  // console.log(leftHeight)
  let rightHeight = getHeight(node.right)
  // console.log(rightHeight)
  // console.log(leftHeight - rightHeight)

if (Math.abs(leftHeight - rightHeight) <= 1) {
  if(node.left) queue.push(node.left)
  if(node.right) queue.push(node.right)

} else{
  return false
}
}
 return true
}

function countNodes(rootNode) {
  // Your code here
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
