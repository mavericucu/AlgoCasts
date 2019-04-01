// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push([]);
  }
  let counter = 1;
  let sC = 0;
  let fC = n - 1;
  let sR = 0;
  let fR = n - 1;

  while (sC <= fC && sR <= fR) {
    for (let i = sC; i <= fC; i++) {
      arr[sR][i] = counter;
      counter++;
    }
    sR++;
    for (let i = sR; i <= fR; i++) {
      arr[i][fR] = counter;
      counter++;
    }
    fC--;
    for (let i = fC; i >= sC; i--) {
      arr[fR][i] = counter;
      counter++;
    }
    fR--;
    for (let i = fR; i >= sR; i--) {
      arr[i][sC] = counter;
      counter++;
    }
    sC++;

  }
  return arr;
}

module.exports = matrix;