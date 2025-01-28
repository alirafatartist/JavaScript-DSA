// Start MY Solution
function isPowerofTwo(n) {
  return `${Number.isInteger(Math.log2(n))} & The Exponent is ${Math.log2(n)}`;
} //Big-O = O(1)-Constant
console.log(isPowerofTwo(-1)); // false
console.log(isPowerofTwo(0)); // false
console.log(isPowerofTwo(1)); // true 2^0 == 1
console.log(isPowerofTwo(2)); // true 2^1 == 2
console.log(isPowerofTwo(8)); // true 2^3 == 8
console.log(isPowerofTwo(5)); // false 2^2.32192... == 5
// End MY Solution

// Start Video Solution
function isPowerofTwo2(n) {
  if (n <= 0) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }
  return true;
} //Big-O = O(logn)
console.log(isPowerofTwo2(-1)); // false
console.log(isPowerofTwo2(0)); // false
console.log(isPowerofTwo2(1)); // true 2^0 == 1
console.log(isPowerofTwo2(2)); // true 2^1 == 2
console.log(isPowerofTwo2(8)); // true 2^3 == 8
console.log(isPowerofTwo2(5)); // false 2^2.32192... == 5
// End Video Solution

// Start Video Solution
function isPowerOfTwoBitWise(n) {
  if (n <= 0) {
    return false;
  }
  return (n & (n - 1)) === 0;
} //Big-O = O(1)-Constant
console.log(isPowerOfTwoBitWise(-1)); // false
console.log(isPowerOfTwoBitWise(0)); // false
console.log(isPowerOfTwoBitWise(1)); // true 2^0 == 1
console.log(isPowerOfTwoBitWise(2)); // true 2^1 == 2
console.log(isPowerOfTwoBitWise(8)); // true 2^3 == 8
console.log(isPowerOfTwoBitWise(5)); // false 2^2.32192... == 5
// End Video Solution
