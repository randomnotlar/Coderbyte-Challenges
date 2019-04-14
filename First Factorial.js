// Despite the testing for my code in coderbyte was for a max of num = 18,
// and browsers support much higher stack depth for recursion 
// (see https://stackoverflow.com/questions/7826992/browser-javascript-stack-size-limit)
// I preferred to stick with a for factorial, rather than a recursive factorial in my answer.

function FirstFactorial(num) { 
  let product = 1;
  for(let i = num; i>0; i--){
    product *= i;
  }
  return product;      
}

// This, however, looks more beautiul.
function FirstFactorialRecursive(num) {
  if(num != 1) return FirstFactorialRecursive(num-1) * num;
  return 1;
}
