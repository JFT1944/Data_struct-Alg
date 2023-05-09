/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
   
   let topVal = this.root
   console.log(topVal)
   let queue = [topVal]
   let sum = 0

    while(queue[0]){
      console.log(queue)


      if(queue[queue.length-1].children[0]){
        let newx = queue[queue.length-1].children[0]
        queue[queue.length-1].children.shift()
        queue.push(newx)
        
      }else{
        queue[queue.length-1].children.pop()
        sum = sum + queue[queue.length-1].val
        queue.pop()
      }
      console.log(queue)
      console.log({sum:sum})




    }
    return sum
  }



  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(){

    let topVal = this.root
    console.log(topVal)
    let queue = [topVal]
    let count = 0;
 
     while(queue[0]){
      //  console.log(queue)
 
 
       if(queue[queue.length-1].children[0]){
         let newx = queue[queue.length-1].children[0]
         queue[queue.length-1].children.shift()
         queue.push(newx)
         
       }else{
        if(queue[queue.length-1].val % 2 === 0){
          count++}
         queue[queue.length-1].children.pop()
          
         console.log(count)
         queue.pop()
       }
       console.log(queue)
      //  console.log({sum:sum})
 
 
 
 
     }
     return count




  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    console.log({lowerBound:lowerBound})
    let topVal = this.root
    console.log(topVal)
    let queue = [topVal]
    let count = 0;
    let wCount = 0
     while(queue[0]){
      //  console.log(queue)
 
      wCount = wCount + 1
       if(queue[queue.length-1].children[0]){
         let newx = queue[queue.length-1].children[0]
         queue[queue.length-1].children.shift()
         queue.push(newx)
         
       }else{
        console.log({val:queue[queue.length-1].val})
        if(queue[queue.length-1].val >= lowerBound){
          console.log({lb:lowerBound})
          console.log({val:queue[queue.length-1].val})
          count++
        }
         queue[queue.length-1].children.pop()
          
         console.log(count)
         queue.pop()
       }
       console.log(queue)
      //  console.log({sum:sum})
 
 
 
 
     }
     console.log({wCount:wCount})
     return count
     
  }

}

module.exports = { Tree, TreeNode };
