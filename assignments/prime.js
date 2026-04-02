
function isPrime(n) {
  if (n <= 1) return false; // 0 and 1 are not prime
  if (n <= 3) return true;  // 2 and 3 are prime

  // Skip even numbers and multiples of 3
  if (n % 2 === 0 || n % 3 === 0) return false;

  // Check divisors from 5 up to the square root of n
  // We use i += 6 to check 6k ± 1 (all primes > 3 follow this)
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

// Usage:
console.log(isPrime(29)); // true
console.log(isPrime(15)); // false
