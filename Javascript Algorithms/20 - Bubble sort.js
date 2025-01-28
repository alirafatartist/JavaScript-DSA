// Problem - Given an array of integers, sort the array.
// [-6, 20, 8,-2,4]
// const arr =
// bubbleSort(arr) Should return [-6 ,-2, 4, 8, 20]

// Start MY Solution
function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp;
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// Big-O = O(n^2)
console.log(BubbleSort([-6, 20, 8, -2, 4]));
// End MY Solution

// Start Video Solution
function BubbleSort2(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      let temp;
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}
// Big-O = O(n^2)
console.log(BubbleSort2([-6, 20, 8, -2, 4]));
// End Video Solution

// Ai Problem 1
// Write a function to sort an array of integers in ascending order using Bubble Sort.

// Input: [5, 3, 8, 4, 6]
// Output: [3, 4, 5, 6, 8]
function bubble(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      let tempvariable;
      if (arr[i] > arr[i + 1]) {
        tempvariable = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tempvariable;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
console.log(bubble([5, 3, 8, 4, 6]));

function bubble2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let tempvariable;
        tempvariable = arr[i];
        arr[i] = arr[j];
        arr[j] = tempvariable;
      }
    }
  }
  return arr;
}
console.log(bubble2([5, 3, 8, 4, 6]));

// Ai Problem 2
// 2. Count the Number of Swaps
// Modify the Bubble Sort algorithm to count the number of swaps performed during the sorting process.

// Input: [1, 3, 2, 5, 4]
// Output: Sorted Array: [1, 2, 3, 4, 5], Swaps: 2

function bubble3(arr) {
  let swapped;
  let swappedCount = 0;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      let temp;
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        swappedCount++;
      }
    }
  } while (swapped);
  return swappedCount;
}
console.log(bubble3([1, 3, 2, 5, 4]));

// Ai Problem 3
// Sort an Array of Strings
// Use Bubble Sort to sort an array of strings in alphabetical order.

// Input: ["banana", "apple", "cherry", "date"]
// Output: ["apple", "banana", "cherry", "date"]

function bubble4(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][0] > arr[j][0]) {
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(bubble4(["banana", "apple", "cherry", "date"]));

// Ai Problem 4
// 4. Sort an Array of Objects
// Sort an array of objects based on a specific property (e.g., age) using Bubble Sort.

// Input:
// [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 22 },
//     { name: "Alice", age: 30 }
//   ]
// Output:
// [
//     { name: "Jane", age: 22 },
//     { name: "John", age: 25 },
//     { name: "Alice", age: 30 }
//   ]
function bubble5(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].age > arr[j].age) {
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(
  bubble5([
    { name: "John", age: 25 },
    { name: "Jane", age: 22 },
    { name: "Alice", age: 30 },
  ])
);

// Ai Problem 6
// 6. Sort in Descending Order
// Modify the Bubble Sort algorithm to sort an array in descending order.

// Input: [10, 3, 8, 7, 1]
// Output: [10, 8, 7, 3, 1]
function bubble7(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(bubble7([10, 3, 8, 7, 1]));

// Ai Problem 7
// 7. Sort a 2D Array
// Sort a 2D array based on the second element of each sub-array using Bubble Sort.

// Input:
// [
//     [1, 4],
//     [3, 2],
//     [2, 6],
//     [5, 1]
//   ]
// Output:
// [
//     [5, 1],
//     [3, 2],
//     [1, 4],
//     [2, 6]
//   ]
function bubble8(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][1] > arr[j][1]) {
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(
  bubble8([
    [1, 4],
    [3, 2],
    [2, 6],
    [5, 1],
  ])
);
