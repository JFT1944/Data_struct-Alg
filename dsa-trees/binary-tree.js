/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let topVal = this.root
    let shortestDepth = 0
    let que = [topVal]

    while (que[0]){
      console.log('******************')
      if(que[0].left){
        que.push(que[0].left)
        // shortestDepth++
      }
      if(que[0].right){
        que.push(que[0].right)
        // shortestDepth++
      }
      
      console.log({sd:shortestDepth})
      console.log({qLenth:que.length})
      shortestDepth++
      if(!que[0].left && !que[0].right){
        console.log({isd:shortestDepth})
        return shortestDepth
      }
      que.shift()

    }
    
    return shortestDepth


  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    let topVal = this.root
    let longestDepth = 0
    let que = [topVal]
    console.log(this.root)
    if(this.root){
      longestDepth++
    }

    while (que[0]){
      console.log('******************')
      longestDepth++
      console.log({longdep:longestDepth})
      if(que[0].left){
        que.push(que[0].left)
        if(!que[que.length-1].left && !que[que.length-1].right){
          console.log('popped')
          que.pop()
        }
        // shortestDepth++
      }
      if(que[0].right){
        que.push(que[0].right)
        if(!que[que.length-1].left && !que[que.length-1].right){
          console.log('popped')
          que.pop()
        }
        // shortestDepth++
      }
      
      console.log({qLenth:que.length})
      
      // if(!que[0].left && !que[0].right){
      
      // }

      que.shift()

    }
    
    return longestDepth





  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if(!this.root) return 0 
    let topVal = this.root
    let arrToSum = [this.root.val]
    let sum = 0
    let que = [topVal]

    while (que[0]){
      console.log('******************')
      
      if(que[que.length-1].left){
        let x = que[que.length-1].left
        que[que.length-1].left = null
        arrToSum.push(x.val)
        que.push(x)
      }else if(que[que.length-1].right){
        let x = que[que.length-1].right
        que[que.length-1].right = null
        arrToSum.push(x.val)
        que.push(x)
      } 
      
      if(!que[que.length-1].left && !que[que.length-1].right){
        let nSum = arrToSum.reduce((x,y) => {
          return x + y
        }, 0)
        console.log(arrToSum)
        console.log(nSum)
        if(sum < nSum){
          sum = nSum
        }
        arrToSum.pop()
      }
      que.pop()

    }
    
    return sum

    
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null
    
    let topVal = this.root
    let nextLowerNumber = this.root.val
    let que = [topVal]
    

    while (que[0]){
      console.log('******************')
      if(que[0].left){
        que.push(que[0].left)
        // shortestDepth++
      }
      if(que[0].right){
        que.push(que[0].right)
        // shortestDepth++
      }
      
      console.log({qLenth:que.length})
      
      // if(!que[0].left && !que[0].right){
      //   console.log({isd:shortestDepth})
      //   return shortestDepth
      // }
      if(que[0].val > lowerBound && que[0].val <= nextLowerNumber ){
        nextLowerNumber = que[0].val
      } 
      que.shift()

    }
    if(nextLowerNumber <= lowerBound){
      return null
    }

    console.log(nextLowerNumber)
    return nextLowerNumber

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
