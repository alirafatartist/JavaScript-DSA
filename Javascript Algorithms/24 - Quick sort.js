// start my
function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}
// Big-O = O(nlogn)
console.log(quicksort([2, 5, 1, 9, 5, 6]));
// end my
