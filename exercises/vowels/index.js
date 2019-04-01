// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let counter = 0;
  let arr = [];
  arr = str.toLowerCase().split("");
  console.log(arr);
  arr.forEach(element => {
    if (element==='a' || element==='e' || element==='i' || element==='o' || element==='u'){
      counter++;
    } else {

    }
  });
  return counter;
}
module.exports = vowels;
