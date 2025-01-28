// Start My Solution
function Fibonacci(n) {
  let arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(i);
  }

  let k = 0;
  for (let j = 3; j < arr.length; j++) {
    arr[j - 1] = arr[k] + arr[j - 2];
    k++;
  }
  console.log(arr);
  return arr.slice(0, n);
} //Big-O = O(n)
console.log(Fibonacci(2));
console.log(Fibonacci(3));
console.log(Fibonacci(7));
// End My Solution

// Start Video Solution
function Fibonacci2(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
} // //Big-O = O(n)

console.log(Fibonacci2(2));
console.log(Fibonacci2(3));
console.log(Fibonacci2(7));
// End Video Solution

// Start Binet's formula
function Fibonacci3(n) {
  // return 1/Math.sqrt(5)*Math.pow(((1+Math.sqrt(5))/2),n)-1/Math.sqrt(5)*Math.pow(((1-Math.sqrt(5))/2),n)
  const phi = (1 + Math.sqrt(5)) / 2;
  const psi = (1 - Math.sqrt(5)) / 2;

  return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));
} //Big-O = O(1)
console.log(Fibonacci3(7)); //13.000000000000004 that mean that 7th  Fibonacci number is 13
// End Binet's formula
