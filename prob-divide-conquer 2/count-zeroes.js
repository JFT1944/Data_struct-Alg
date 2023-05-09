function countZeroes(arr) {
console.log('******')
    if(!arr.includes(1)){
        console.log('no 1')
        return arr.length
    }
    let leftIdx = 0;
    let rightIdx = arr.length - 1
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2)
    while(leftIdx <= rightIdx){
        // console.log(middleIdx)
        middleIdx = Math.floor(rightIdx + leftIdx / 2)
        if(arr[middleIdx] === 0){
            rightIdx = middleIdx -1
        } else{
            leftIdx = middleIdx + 1
        }



    }
    return (arr.length) - (middleIdx + 1)

    




  
}

module.exports = countZeroes



console.log(countZeroes([1, 1, 1, 1, 0, 0]))
console.log(countZeroes([1, 0, 0, 0, 0]))
console.log(countZeroes([0, 0, 0]))
console.log(countZeroes([1, 1, 1, 1]))
  