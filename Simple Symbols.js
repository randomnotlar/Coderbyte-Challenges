// This function returns true only if letters in the str are surrounded by + signs "...+a+..."
// ==a+de=e++ this would result false
// +a+b+c+s+ this would result true
// b this would result false ...

function SimpleSymbols(str) { 
  // add buffers around str
  str = "=" + str  + "=";  
  
  // unwanted cases are 
  // PLUS LETTER NOT_A_PLUS
  // NOT_A_PLUS LETTER PLUS
  // NOT_A_PLUS LETTER NOT_A_PLUS

  let Plus_letter_notPlus = /\+[a-z][^+]/gi;
  if(Plus_letter_notPlus.test(str)) return false;
  
  let notPlus_letter_Plus = /[^+][a-z]\+/gi;
  if(notPlus_letter_Plus.test(str)) return false;
  
  let notPlus_letter_notPlus = /[^+][a-z][^+]/gi;
  if(notPlus_letter_notPlus.test(str)) return false;
  
  return true;    
}
