// Start Video Solution
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
} //Big-O = O(n)
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(89));
console.log(isPrime(1));
// End Video Solution

// Start Video Optimized Solution
/* 
    Integers larger than the square root do not need to be checked because, whenever one
    of the two factors 'a' and 'b' is less than or equal to the square root of 'n'
*/
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
} //Big-O = O(sqrt(n))
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(89));
console.log(isPrime(1));
// End Video Optimized Solution
