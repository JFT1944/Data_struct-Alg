/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = [], next, prev) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    if(this.head === null & this.tail === null){
      this.head = newNode
      this.tail = newNode
    } else {

      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if(this.head === null & this.tail === null){
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
       
    }

  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.tail) return
    
    this.tail = this.tail.prev
  }
  /** shift(): return & remove first item. */

  shift() {
    if(!this.head) return
    this.head = this.head.next

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let x = this.head
    console.log(x.val)
    let count = 0
    while(x.next !== null){
      if(count === idx) return x.val
      count++
      x = x.next
      console.log(x.val)
    }



  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let x = this.head
    let count = 0
    while(x.next !== null){
      if(x.next.next === null){
        return 'list not long enough'
      }
      console.log(count)
      if (count === idx){
        let newNode = new Node(val)
        newNode.prev = x.prev
        newNode.next = x.next
        x.prev.next = newNode
        x.next.prev = newNode
        return
      }
      
      
      
      
      
      x = x.next
      count++
    }


  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let x = this.head
    let count = 0
    while(x.next !== null){
      if(x.next.next === null){
        return 'list not long enough'
      }
      console.log(count)
      if (count === idx){
        let newNode = new Node(val)
        newNode.prev = x.prev
        newNode.next = x
        x.prev.next = newNode
        x.prev = newNode
        return
      }
      
      
      
      
      
      x = x.next
      count++
    }

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    let x = this.head
    let count = 0
    while(x.next !== null){
      if(x.next.next === null){
        return 'list not long enough'
      }
      console.log(count)
      if (count === idx){
        x.prev.next = x.next
        x.next.prev = x.prev
        return
      }
      
      
      
      
      
      x = x.next
      count++
    }


  }

  /** average(): return an average of all values in the list */

  average() {
    let x = this.head
    let count = 0
    let total = 0
    while(x !== null){
      if(typeof(x.val) !== 'number') return NaN
      // console.log([count, total])
       total = total + x.val 
       console.log([count, total]) 
       // return
    
      
      
      
      
      x = x.next
      count++
    }

    console.log([total, count])
    return total / (count)
    
  }
}




let t = new LinkedList

t.push('apple')
t.push('bannana')
t.push('pear')
t.push('orange')
t.push('graprefruit')



let numList = new LinkedList

numList.push(1)
numList.push(2)
numList.push(3)
numList.push(4)
numList.push(5)
numList.push(6)
numList.push(7)
numList.push(8)
numList.push(9)
numList.push(10)
console.log(numList.average())

module.exports = LinkedList;