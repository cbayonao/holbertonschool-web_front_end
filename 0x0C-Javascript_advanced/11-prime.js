"use strict";
function countPrimeNumbers() {
  for (let i = 2; i <= 100; i++) {
    if (test_prime(i)) {
      console.log(i);
    }
  }
}

function test_prime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

let t0 = window.performance.now();
let i = 0;
while (i < 100) {
  console.log(countPrimeNumbers());
  i++;
}
let t1 = window.performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    t1 - t0
  } miliseconds`
);
