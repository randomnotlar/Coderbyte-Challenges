// This code capitalizes first letter of every word. 

// I duplicated what I see on the solution page of Coderbyte
// check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


function LetterCapitalize(str) { 
  // regular expression is written between two forward slashes
  // g and i are flags. g-> global match (find all matches) i-> ignore case
  // \b means beginning of a word. And \b itself is not a char.
  // So the substring returned by regex is basicaly a char (hence the parameter name)
  
  // this creates the string that will be replaced at the place of the firstChar
  let UpperCase = (firstChar) => firstChar.toUpperCase();
  
  return str.replace(/\b[a-z]/gi, UpperCase);
}
