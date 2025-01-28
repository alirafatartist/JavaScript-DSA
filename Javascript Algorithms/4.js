function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(summation(4)); // 1+2+3+4 = 10    O(n)-Linear

function summation2(n) {
  return (n * (n + 1)) / 2;
}
console.log(summation2(4)); // (4*(4+1)) / 2  => 4*5/2 = 10  O(1)-Constant
