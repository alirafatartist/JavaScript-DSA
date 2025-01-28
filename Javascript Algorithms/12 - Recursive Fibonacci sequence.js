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