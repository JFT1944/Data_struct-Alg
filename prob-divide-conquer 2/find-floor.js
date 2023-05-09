function findFloor(arr, x) {
    // console.log('########')
    let leftIdx = 0
    let rightIdx = arr.length -1
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2)
    let closestNumber = -1

    while(leftIdx <= rightIdx){
        // console.log(arr[middleIdx])
        middleIdx = Math.floor((rightIdx + leftIdx) / 2)
       
        if(arr[middleIdx] > x){
            // console.log('going left')
            rightIdx = middleIdx -1
        } else{
            // console.log('going right or got it')
            closestNumber = arr[middleIdx]
            leftIdx = middleIdx + 1

        }
        
    }

    return closestNumber





  
}

module.exports = findFloor




console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 5))
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20))
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0))