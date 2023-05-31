/** product: calculate the product of an array of numbers. */
function product(nums) {

if(!nums[0]) return 1
let num = nums[nums.length-1]
nums.pop()
return num * product(nums)


}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {

let word = words[words.length-1]
words.pop()
if(!words[0]) return word.length
let longestWord = longest(words)
if(word.length > longestWord){
  return word.length
}else{
  return longestWord

}
}
/** everyOther: return a string with every other letter. */

function everyOther(str) {

let letter = str[str.length-1]
str = str.slice(0, str.length-1)
if(!str[0]) return letter
let newStr = everyOther(str)
if(str.length % 2 === 0){
  return newStr + letter
}else{
  return newStr

}}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, rstr) {
  if(!rstr){
    rstr = str.split('').reverse().join('')
  }
  if(str === rstr){
    return true
  }else{
    return false
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

function helper(x, y){
  if(x.length === 0) {return -1}
  }
  if(x[x.length -1] == y){
    console.log([x, x[x.length -1]])
    return x.length -1
  }
  x.pop()
  console.log([x, y])
  return helper(x, y)

}
return helper(arr, val)



}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

function helper(str){
  if(!str[0]) return ''
  let letter = str[str.length-1]
  str = str.slice(0, str.length-1)
  return letter + helper(str)

}
helper(str)
return helper(str)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  // given an object, return an array of all of the string values. use recursion
  function helper(){
    for(let key in obj){
      if(typeof obj[key] === 'object'){
        helper(obj[key])
      }else if(typeof obj[key] === 'string'){
        arr.push(obj[key])
      } 

      
    }
  }
  let arr = []
  helper()
  return arr

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}


// product([1,2,3,4, 10])
// console.log(longest(['one', 'two', 'three', 'seventeen']))



module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
}
