function findRotationCount(arr) {



    // let leftIdx = 0
    // let rightIdx = arr.length -1
    // let middleIdx = Math.floor((rightIdx + leftIdx) / 2)
    // let changingNumber = 0

    // while (leftIdx <= rightIdx){
    
    //     middleIdx = Math.floor((rightIdx + leftIdx) / 2)
    
    
    // }


    let finalNum = 0
    let lastNum = 0;
    let counter = 0
    console.log('###########')
    for(let i of arr){
        // console.log([finalNum, lastNum, counter, i])
        if (lastNum > i){
            // console.log('lesserNum')
            finalNum = counter
        }
        lastNum = i
        counter++
    }

return finalNum
    
  
}






console.log(findRotationCount([15, 18, 2, 3, 6, 12]))
console.log(findRotationCount([7, 9, 11, 12, 5]))
console.log(findRotationCount([7, 9, 11, 12, 15]))

module.exports = findRotationCount