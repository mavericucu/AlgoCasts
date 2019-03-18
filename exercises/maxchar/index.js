// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var contador = 0;
  var totalcontador = 0;
  var cha = '';
  var arr = str.split('');
  for (var i = 0; i<arr.length; i++) {
    for (var j = 0; j<arr.length; j++) {
      if (arr[i] = arr[j]){
        contador++;
      }
      if (contador > totalcontador) {
        totalcontador = contador;
        cha = arr[i];
      }
    }
  }
  return cha;
}
  
module.exports = maxChar;
