class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } 
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } 
        current = current.right;
      }
    }




  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {

    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
  } 
    let current = this.root;
    function helper(current) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
      helper(current);
    }
    helper(current);
    return this;
  }
  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

      if(!this.root){
        return undefined
      }
      if(this.root === val){
        return this.root
      }
      let current = this.root
      while(true){
        if(current.val === val){
          return current
        } else if(current.val < val){
          current = current.left
        } else if(current.val >= val){
          current = current.right
        } else {
          return undefined
        }
      }
      return undefined

  }

    

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
      
      if(!this.root){
        return undefined
      }
      if(this.root === val){
        return this.root
      }
      let current = this.root
      function helper(current){
        if(current.val === val){
          return current
        } else if(current.val < val){
          current = current.left
        } else if(current.val >= val){
          current = current.right
        } else {
          return undefined
        }
        helper(current)
      }
      helper(current)
      return undefined


  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {


    let current = this.root
    let data = []
    function traverse(node){
      data.push(node.val)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(current)
    return data

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
      
      let current = this.root
      let data = []
      function traverse(node){
        if(node.left) traverse(node.left)
        data.push(node.val)
        if(node.right) traverse(node.right)
      }
      traverse(current)
      return data

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
      
      let current = this.root
      let data = []
      function traverse(node){
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
        data.push(node.val)
      }
      traverse(current)
      return data

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    
    let current = this.root
    let data = []
    let queue = []
    queue.push(current)
    while(queue.length){
      current = queue.shift()
      data.push(current.val)
      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)
    }
    return data

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
