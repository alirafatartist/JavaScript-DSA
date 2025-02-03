// Start video solution
function mergeSort(arr) {
  // If the array has 1 or 0 elements, it's already sorted
  if (arr.length < 2) {
    return arr;
  }

  // Find the middle point and split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  // Recursively sort both halves and merge them
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(leftHalf, rightHalf) {
  const sortedArray = [];

  // Compare elements from both halves and add the smaller one to the sorted array
  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] <= rightHalf[0]) {
      sortedArray.push(leftHalf.shift());
    } else {
      sortedArray.push(rightHalf.shift());
    }
  }

  // Add any remaining elements from either half
  return [...sortedArray, ...leftHalf, ...rightHalf];
}

const unsortedArray = [8, 20, -2, 4, -6];
console.log(mergeSort(unsortedArray)); // [-6, -2, 4, 8, 20]
// End video solution
