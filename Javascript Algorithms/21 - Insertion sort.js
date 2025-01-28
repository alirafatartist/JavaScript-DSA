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

console.log(insertionSort([-6, 20, 8, -2, 4]));
