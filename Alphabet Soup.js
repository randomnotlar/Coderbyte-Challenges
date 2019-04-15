// Have the function AlphabetSoup(str) take the str string parameter being passed 
// and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
// Assume numbers and punctuation symbols will not be included in the string. 7

// Array.prototype.sort helped a lot!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function AlphabetSoup(str) { 
  let strArray = [...str];
  strArray.sort((a, b) => AlphabeticIndex(a) - AlphabeticIndex(b));
  return strArray.join(""); 

  function AlphabeticIndex(c){
    let ascii = c.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
      let rankInABC = ascii - 65;
      return rankInABC;
    } else if (ascii >= 97 && ascii <= 122) {
      let rankInABC = ascii - 97; 
      return rankInABC;
    } 
  }   
}
