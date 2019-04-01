// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  var arr = [];
  const value = (n - 1) * 2 + 1;
  for (let i = 0; i < value; i++) {
    arr.push(" ");
  }
  for (let j = 0; j < n; j++) {
    if (j === 0) {
      arr.splice(value % n, 1, "#");
    } else {
      arr.splice(value % n + j, 1, "#");
      arr.splice(value % n - j, 1, "#");
    }
    console.log(arr.join(''));
  }
}

module.exports = pyramid;