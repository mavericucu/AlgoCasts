// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const forStringA = cleanArray(stringA);
  const forStringB = cleanArray(stringB);

  if(forStringA === forStringB){
    return true;
  } else {
    return false;
  }
}

function cleanArray(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const forStringA = getObject(stringA);
//   const forStringB = getObject(stringB);
//   console.log(forStringA);
//   console.log(forStringB);

//   if (Object.keys(forStringA).length !== Object.keys(forStringB).length) {
//     return false;
//   }

//   for (let element in forStringA) {
//     if (forStringA[element] !== forStringB[element]) {
//       return false;
//     }
//   }
//   return true;
// }


// function getObject(str) {
//   const objectMap = {};

//   for (let element of str.replace(/[^\w]/g, '').toLowerCase()) {
//     objectMap[element] = objectMap[element] + 1 || 1;
//   }
//   return objectMap;
// }

// module.exports = anagrams;