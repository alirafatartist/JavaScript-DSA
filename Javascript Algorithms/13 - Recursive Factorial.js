function Factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * Factorial(n - 1);
} // Big-O = O(n)
console.log(Factorial(0)); //1
console.log(Factorial(1)); //1
console.log(Factorial(5)); //120
