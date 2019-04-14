// My first intention was using a while loop in some way like:
// while(lenght(str)){
// newStr.push(str.pop())
// }

// However, https://dev.to/saigowthamr/how-to-reverse-a-string-in-javascript-3i9c inspired my answer.
// This was my first time learning the "reduce" function and "...array" operator.
// Since they were new to me, I preferred to use them for learning.

function FirstReverse(str) {
    let charArray = [...str];
    let reducerCallback = (accumulator, currentChar) => (currentChar + accumulator);
    return charArray.reduce(reducerCallback);      
}
