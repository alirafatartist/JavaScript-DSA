function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
let t1 = performance.now();
console.log(summation(4)); // 1+2+3+4 = 10    O(n)-Linear
let t2 = performance.now();
console.log(`The Excution Time is:  ${t2 - t1}`);

function summation2(n) {
  return (n * (n + 1)) / 2;
}
let t3 = performance.now();
console.log(summation2(4)); // (4*(4+1)) / 2  => 4*5/2 = 10  O(1)-Constant
let t4 = performance.now();
console.log(`The Excution Time is:  ${t4 - t3}`);
