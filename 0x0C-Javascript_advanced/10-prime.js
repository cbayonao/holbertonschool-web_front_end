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

const t0 = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
const t1 = performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    t1 - t0
  } milliseconds.`
);
