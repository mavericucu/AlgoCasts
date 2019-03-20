// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  var arr = [];
  for (var i = 0; i < n; i++){
    arr.push(" ");
  }
  for (var i = 0; i < arr.length; i++) {
    arr.splice(i, 1, '#')
    console.log(arr.join(""));
  }
}

module.exports = steps;