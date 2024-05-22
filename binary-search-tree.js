// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        // Your code here
        this.root = null
    }

    insert(val, currentNode = this.root) {
        let newNode = new TreeNode(val)
        if (!this.root) {
            this.root = newNode
            return
        }

        // if values are smaller
        if (val < currentNode.val) {

            if (!currentNode.left) {
                currentNode.left = newNode
                return
            } else {
                this.insert(val, currentNode.left)
            }
        }
        if (val > currentNode.val) {

            if (!currentNode.right) {
                currentNode.right = newNode
                return
            } else {
                this.insert(val, currentNode.right)
            }
        }
    }

    search(val) {
        // Your code here
        let curr = this.root
        if (!this.root) return false
        while (curr) {
            if (curr.val === val) return true
            if (val > curr.val) {
                curr = curr.right
            } else if (val < curr.val) {
                curr = curr.left
            }
        }

        return false
    }


    preOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode === null) return
        console.log(currentNode.val)
        this.preOrderTraversal(currentNode.left)
        this.preOrderTraversal(currentNode.right)
    }


    inOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode === null) return
        this.inOrderTraversal(currentNode.left)
        console.log(currentNode.val)
        this.inOrderTraversal(currentNode.right)
    }


    postOrderTraversal(currentNode = this.root) {
        // Your code here
        if (currentNode === null) return
        this.postOrderTraversal(currentNode.left)
        this.postOrderTraversal(currentNode.right)
        console.log(currentNode.val)

    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        if (this.root === null) return
        let queue = []
        queue.push(this.root)

        while (queue.length > 0) {
            let node = queue.shift()
            console.log(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }

    }
}

    module.exports = { BinarySearchTree, TreeNode }
