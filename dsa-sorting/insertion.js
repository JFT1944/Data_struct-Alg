function insertionSort(arr) {


for(let i=0;i<arr.length;i++){
    let selectedVal = arr[i]

    for (let x = i-1; x-1 && arr[x] > selectedVal; x--){
        console.log(x)
        console.log(arr[x])
        arr[x+1] = arr[x]
    }

    console.log(arr)

    arr[x+1] = selectedVal




}

return arr
}

module.exports = insertionSort;