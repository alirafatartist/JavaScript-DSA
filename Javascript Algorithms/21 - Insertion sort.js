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

// ai problems
// Problem 1
// Problem: Write a function that sorts an array of numbers using the insertion sort algorithm.

function insertionSort3(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    j = i - 1;

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
console.log(insertionSort3([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]

// Problem 2
// Problem: Write a function that not only sorts an array using insertion sort, but also returns the number of comparisons made during the sorting process.
function insertionSort4(arr) {
  let c = 0;
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (arr[j] > current) {
      let temp;
      temp = arr[j];
      arr[j] = current;
      arr[j + 1] = temp;
      j--;
      c++;
    }
    c++;
  }
  return { sortedArray: arr, comparisons: c };
}
console.log(insertionSort4([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]

// Problem 3
// Problem: You are given an array of objects, each with a name and an age property. Write a function that sorts the array by age using insertion sort and returns the sorted array

function insertionSortByAge(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i].age;
    let j = i - 1;

    while (j >= 0 && arr[j].age > current) {
      let temp;
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      j--;
    }
  }
  return arr;
}

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 20 },
];

console.log(insertionSortByAge(people));
