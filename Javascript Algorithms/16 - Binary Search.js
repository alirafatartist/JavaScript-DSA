// Problem - Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the
// array. Return -1 if the target element is not found.

// Note ⚠️ Binary Search Only Works On Sorted Array
// Start Video Solution
function BinarySearch(arr, t) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === t) {
      return middleIndex;
    }
    if (arr[middleIndex] < t) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
} // Big-O = O(logn)
console.log(BinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(BinarySearch([-5, 2, 4, 6, 10], 2)); // 1
console.log(BinarySearch([-5, 2, 4, 6, 10], 4)); // 2
console.log(BinarySearch([-5, 2, 4, 6, 10, 12, 15, 47, 48, 30], 15)); // -1
console.log(BinarySearch([-5, 2, 4, 6, 10], 20)); // -1
// End Video Solution
