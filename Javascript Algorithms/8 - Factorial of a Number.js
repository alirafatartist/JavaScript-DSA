// Start My Solution
function Factorial(n) {
  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i;
  }
  return fac;
} //Big-O = O(n)
console.log(Factorial(0)); //1
console.log(Factorial(1)); //1
console.log(Factorial(5)); //120
// End My Solution

// Start MY Solution
function Factorial2(n) {
  let fac = 1;
  for (let i = n; i > 0; i--) {
    fac *= i;
  }
  return fac;
} //Big-O = O(n)
console.log(Factorial2(0)); //1
console.log(Factorial2(1)); //1
console.log(Factorial2(5)); //120
// End MY Solution

// Start Stirling’s Approximation
function Factorial3(n) {
  return Math.round(Math.sqrt(2 * Math.PI * n) * Math.pow(n / Math.E, n));
}
console.log(Factorial3(5)); // 118 Approximate to 120
console.log(Factorial3(6)); // 710 Approximate to 720
console.log(Factorial3(7)); // 4980 Approximate to 5040
// End Stirling’s Approximation

// Start Github Repo Solution
function factorialRecursive(n) {
  return n > 1 ? n * factorialRecursive(n - 1) : 1;
} //Big-O = O(n)
console.log(factorialRecursive(5)); // 120
console.log(factorialRecursive(6)); // 720
console.log(factorialRecursive(7)); // 5040
// End Github Repo Solution
