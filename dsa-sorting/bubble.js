
function bubbleSort(arr) {

for (let i= arr.length; i >0; i--){
    console.log(i)
    for(let x=0;x < arr.length;x++){
        if(arr[x] > arr[x+1]){
            console.log(arr[x])
            if(arr[x+1]){
            [arr[x], arr[x+1]] = [arr[x+1], arr[x]]}
        }
    }
}

    
    










return arr

}

module.exports = bubbleSort;