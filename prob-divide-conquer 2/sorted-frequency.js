function sortedFrequency(arr, x) {

    let left = 0
    let right = arr.length - 1
    let mid = Math.floor((left + right) / 2)
    let mid1;
    let mid2;
    let count = 0

    while (left <= right) {
       
        if(arr[mid] === x) {
            count++
            mid1 = mid - 1
            mid2 = mid + 1
            while(arr[mid1] === x) {
                count++
                mid1--
            }
            while(arr[mid2] === x) {
                count++
                mid2++
            }
            if(count === 0) {
                return -1
        } else {
            return count
        }
        return -1
    
    }








}}

module.exports = sortedFrequency