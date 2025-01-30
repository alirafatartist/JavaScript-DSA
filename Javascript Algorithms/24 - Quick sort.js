// start video solution
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
// end video solution

// solve ai problems
// problem 1
// Problem: Implement the Quick Sort algorithm to sort an array of numbers in ascending order.

function quickSort1(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let left = [];
  let right = [];
  let pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort1(left), pivot, ...quickSort1(right)];
}

console.log(quickSort1([3, 6, 8, 10, 1, 2, 1]));

// problem 2
// Problem: Modify the Quick Sort algorithm to accept a custom comparator function that allows sorting based on any condition, not just ascending order.
function quickSort2(arr, ascending) {
  if (arr.length < 2) {
    return arr;
  }

  let left = [];
  let right = [];
  let pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (ascending) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else [right.push(arr[i])];
    } else {
      if (arr[i] > pivot) {
        left.push(arr[i]);
      } else [right.push(arr[i])];
    }
  }
  return [
    ...quickSort2(left, ascending),
    pivot,
    ...quickSort2(right, ascending),
  ];
}

console.log(quickSort2([3, 6, 8, 10, 1, 2, 1], true)); // [1, 1, 2, 3, 6, 8, 10]
console.log(quickSort2([3, 6, 8, 10, 1, 2, 1], false)); // [10, 8, 6, 3, 2, 1, 1]

// problem 3
// Problem: Write a Quick Sort algorithm that sorts an array of objects based on a property (e.g., age), and allows sorting in either ascending or descending order based on a flag.

function quickSort3(arr, property, ascending = true) {
  if (arr.length < 2) {
    return arr;
  }

  let left = [];
  let right = [];
  let pivotage = arr[arr.length - 1][property];

  for (let i = 0; i < arr.length - 1; i++) {
    if (ascending) {
      if (arr[i][property] < pivotage) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    } else {
      if (arr[i][property] > pivotage) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return [
    ...quickSort3(left, property, ascending),
    arr[arr.length - 1],
    ...quickSort3(right, property, ascending),
  ];
}
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 20 },
];
console.log(quickSort3(people, "age"));
// Output: [
//   { name: 'David', age: 20 },
//   { name: 'Bob', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'Charlie', age: 35 }
// ]

// Test case with sorting by age in descending order
console.log(quickSort3(people, "age", false));
// Output: [
//   { name: 'Charlie', age: 35 },
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'David', age: 20 }
// ]
