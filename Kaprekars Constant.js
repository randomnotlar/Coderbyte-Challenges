// Have the function KaprekarsConstant(num) take the num parameter being passed which will be 
// a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: 
// Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), 
// and subtract the smaller number from the bigger number. Then repeat the previous step. 
// Performing this routine will always cause you to reach a fixed number: 6174. 
// Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). 
// Your program should return the number of times this routine must be performed until 6174 is reached. 
// For example: if num is 3524 your program should return 3 because of the following steps: 
// (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 

function KaprekarsConstant(num) { 
  let counter = 0;
  let result = num;
  while(result != 6174){
    result = Kaprekarsify(result);
    counter++;
  }
  return counter;
  
  function Kaprekarsify(n){
    //let n be ABCD
    
    let D = n%10;
    n -= D;
    n /= 10;
    let C = n%10;
    n -= C;
    n /= 10;
    let B = n%10;
    n -= B;
    n /= 10;
    let A = n%10;
    
    let numberList = [A, B, C, D];
    
    numberList.sort((a, b) => a - b)
    
    let ascending = numberList[0]*1000 + numberList[1]*100 + numberList[2]*10 + numberList[3];
    let descending = numberList[3]*1000 + numberList[2]*100 + numberList[1]*10 + numberList[0];
    
    return descending - ascending;
  }
}
