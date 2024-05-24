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

  let counter1 = 1 + getHeight(rootNode.left)
  let counter2 = 1 + getHeight(rootNode.right)
  return Math.max(counter1, counter2)

}

function balancedTree(rootNode) {

  let queue = [rootNode]


  while (queue.length) {
    let node = queue.shift()

    let leftHeight = getHeight(node.left)
    let rightHeight = getHeight(node.right)


    if (Math.abs(leftHeight - rightHeight) <= 1) {
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)

    } else {
      return false
    }
  }
  return true
}

function countNodes(rootNode) {
  // Your code here
  if (!rootNode) return null
  let counter = 0
  let stack = [rootNode]

  while (stack.length > 0) {

    let node = stack.pop()
    counter++
    // console.log(node.val)


    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }

  return counter
}

function getParentNode(rootNode, target) {
  // Your code here
  if (!rootNode || rootNode.val === target) return null


  let queue = [rootNode]


  while (queue.length > 0) {
    let node = queue.shift()
    console.log(node.val)


    if (node.left) {
      if (node.left.val === target) return node
      queue.push(node.left)
    }
    if (node.right) {
      if (node.right.val === target) return node
      queue.push(node.right)
    }
  }
  //return undefined
  // if no target is found
  return undefined

}
       //   4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7

// stack =>[]
// target = 4
// curr = 3
//prev = 2
function inOrderPredecessor(rootNode, target) {
  // Your code here
  let stack = []
  let curr = rootNode
  let prev = null

  while (stack.length > 0 || curr !== null) {
      // Traverse to the left most node
    while (curr !== null) {
    stack.push(curr)
    curr = curr.left
    }
      // Visit the current node
    curr = stack.pop()
    // Check if the current node is the target
    if(curr.val === target) {
        if(prev === null) return null

        return prev.val
    }

    //  Update the previous node
    prev = curr
    //  Move to the right subtree
    curr = curr.right
    }
  // if target is not found return null
    return null
}


     //     4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  let stack = [];
  let current = rootNode;
  let parent = null;

// Find the target node and its parent
  while(current){
    if(current.val === target){
      break;
    }
    parent = current
    if(target < current.val){
      current = current.left;
    } else{
      current = current.right
    }
    }


  // Undefined if the target cannot be found
    if(!current) return undefined


  // Case 0: Zero children and no parent:
  //   return null
  if(!parent && !current.left && !current.right){
    return null
  }

  // Case 1: Zero children:
  //   Set the parent that points to it to null
  if(!current.left && !current.right){
      if(parent.left === current){
        parent.left = null;
      } else{
        parent.right = null;
      }
      return rootNode
  }



     //     4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7

  // Case 2: Two children:
   // checks if the current node has both left and right children
  if(current.left && current.right){

  // intialize two variables predecessor and predecessorParent


  // "predecessor" variable will find the node with largest value in left subtree (in-order predecessor)
  // "predecessorParent" variable will track the parent of "predecessor"
  // while traversing to find right most node on left subtree

  let predecessor = current.left //2
  let predecessorParent = current // 4

  // Enter a loop that traverses to rightmost node in the left subtree
  // (the in-order predecessor)


  while(predecessor.right) {
  // update the predecessorParent to the current predecessor node
    predecessorParent = predecessor // 2
    // update the predecessor to its right child
    // && continue the process until we reach rightmost node in left subtree
    predecessor = predecessor.right
  }

  //  after finding the in-order predecessor, replace value of current node('current.val)
  //  with the value of the in-order predecessor a.k.a delete the current node by replacing
  // its value with value of predecessor
  current.val = predecessor.val


  //  finally we update the parent node of the in-order predecessor to point to the
// left child of the predecessor.
// if the left child of "predecessorParent" is equal to the "predecessor" , we set it
//  to the left child of "predecessor"  ('predecessor.left')

// otherwise we set the right child of predecessorParent to the left child of predecessor
  if(predecessorParent.left === predecessor){ //if 1 === 3
    predecessorParent.left = predecessor.left
  } else{ predecessorParent.right = predecessorParent.left

  }
return rootNode
  //  Set the value to its in-order predecessor, then delete the predecessor

}
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child
  if(current.left || current.right){
    let child;
    if(current.left){
       child = current.left
    } else{
      child = current.right
    }
      if(parent.left === current){
      parent.left = child
    } else {
        parent.right = child
    }
    return rootNode
  }

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
