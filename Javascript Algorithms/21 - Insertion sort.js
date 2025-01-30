// Problem - Given an array of integers, sort the array.
// [-6, 20, 8,-2,4]
// const arr =
// bubbleSort(arr) Should return [-6 ,-2, 4, 8, 20]

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] >= temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}
// Big-O = O(n^2)

console.log(insertionSort([-6, 20, 8, -2, 4]));

// my self
function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // pointer 1
    let j = i - 1; //  pointer 2

    while (arr[j] > current) {
      let temp;
      temp = arr[j];
      arr[j] = current;
      arr[j + 1] = temp;
      j--;
    }
  }
  return arr;
}
// Big-O = O(n^2)

const arr = [5, 2, 9, 1, 5, 6];
console.log(insertionSort2(arr)); // Output: [1, 2, 5, 5, 6, 9]
