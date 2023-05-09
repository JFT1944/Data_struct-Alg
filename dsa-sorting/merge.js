
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let x = 0;
  
    while (i < arr1.length && x < arr2.length) {
        console.log(arr2)
      if (arr2[x] > arr1[i]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[x]);
        x++;
      }
    }
  
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
  
    while (x < arr2.length) {
      results.push(arr2[x]);
      x++;
    }
  
    return results;
  }

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }

module.exports = { merge, mergeSort};