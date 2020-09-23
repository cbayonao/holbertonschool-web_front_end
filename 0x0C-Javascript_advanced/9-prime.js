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
var t0 = performance.now();
countPrimeNumbers();
var t1 = performance.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
);
