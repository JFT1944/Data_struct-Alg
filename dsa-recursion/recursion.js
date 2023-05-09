/** product: calculate the product of an array of numbers. */
let total = 1
function product(nums) {
  // let total = 1
  {console.log({total:total})}
  total = total * nums[0]
  nums.shift()  
console.log(total, nums)


  if(nums.length === 0) {
    console.log(total)
    return total}
  product(nums)
}

/** longest: return the length of the longest word in an array of words. */
let longestWord = ''
console.log({lW: longestWord.length})
function longest(words) {
  if(!words[0]) return longestWord
  console.log(words)
  console.log(longestWord)
if(longestWord.length < words[0].length){
  console.log('worked')
  longestWord = words[words.length -1]
}
words.pop()




longest(words)
return longestWord
}

/** everyOther: return a string with every other letter. */
let eO = [] 
function everyOther(str) {

if(!str[0]) return eO

eO.push(str[str.length-1])
console.log(eO)
console.log(str)
str.pop()
str.pop()
everyOther(str)
return {f:eO}
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, rstr) {
if(!str[0]) return

if(str[str.length-1] !== rstr[rstr.length -1]){
  return false
}


str.pop()
rstr.pop()
isPalindrome(str, rstr)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}



// product([1,2,3,4, 10])
// console.log(longest(['one', 'two', 'three', 'seventeen']))
console.log(everyOther(['one', 'two', 'three', 'seventeen']))
console.log(isPalindrome('racecar', 'racecar'))


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
