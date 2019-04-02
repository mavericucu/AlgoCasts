// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;




// function fib(n) {
//   const arr = [];
//   let value = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i === 0) {
//       arr.push(0);
//     } else if (i === 1) {
//       arr.push(1);
//     } else {
//       value = arr[i - 1] + arr[i - 2];
//       arr.push(value);
//     }

//   }
//   return arr[n];
// }

// module.exports = fib;