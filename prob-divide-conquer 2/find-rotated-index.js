
function findRotatedIndex(arr, x) {

console.log(arr)
let arrLength = arr.length
let left = 0
let right = arrLength - 1
let mid = Math.floor((left + right) / 2)
let mid1;
let mid2;

while (left <= right) {
    if(arr[mid] === x) {
        return mid
    }
    if(arr[left] < arr[mid]) {
        if(x >= arr[left] && x < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    else {
        if(x > arr[mid] && x <= arr[right]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    mid = Math.floor((left + right) / 2)





 
}
    return -1
}








findRotatedIndex([3, 4, 1, 2], 4)
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)
findRotatedIndex([37, 44, 66, 102, 10, 22], 14)
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)



module.exports = findRotatedIndex