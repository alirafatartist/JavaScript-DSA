// Problem - Given an array of 'n' elements and a target element 't', find the index of 't' in the
// array. Return -1 if the target element is not found.

// Start My Solution
function LinearSearch(arr, t) {
  return arr.indexOf(t);
} // Big-O = O(n)
console.log(LinearSearch([2, 4, 6, 8, 10, 5], 6)); // 2
console.log(LinearSearch([2, 4, 6, 8, 10, 5], 20)); // -1
// End My Solution

// Start My Solution
function LinearSearch2(arr, t) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == t) {
      return j;
    }
  }
  return -1;
} // Big-O = O(n)
console.log(LinearSearch2([2, 4, 6, 8, 10, 5], 6)); // 2
console.log(LinearSearch2([2, 4, 6, 8, 10, 5], 20)); // -1
// End My Solution
