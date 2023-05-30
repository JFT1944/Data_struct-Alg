function findRotationCount(arr) {



    let left = 0
    let right = arr.length - 1
    let mid = Math.floor((left + right) / 2)
    let mid1;
    let mid2;

    while (left <= right) {
        if (arr[mid] < arr[mid - 1]) {
            return mid
        }
        if (arr[left] < arr[mid]) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
        if(arr[mid] > arr[mid + 1]) {
            return mid + 1
        }
        mid = Math.floor((left + right) / 2)
    }
    return 0
    



}

console.log(findRotationCount([15, 18, 2, 3, 6, 12]))
console.log(findRotationCount([7, 9, 11, 12, 5]))
console.log(findRotationCount([7, 9, 11, 12, 15]))

module.exports = findRotationCount