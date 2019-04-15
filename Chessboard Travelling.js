// Have the function ChessboardTraveling(str) read str which will be a string consisting of the location of a space on a standard 8x8
// chess board with no pieces on the board along with another space on the chess board. The structure of str will be the following: 
// "(x y)(a b)" where (x y) represents the position you are currently on with x and y ranging from 1 to 8 and (a b) represents some 
// other space on the chess board with a and b also ranging from 1 to 8 where a > x and b > y. Your program should determine how 
// many ways there are of traveling from (x y) on the board to (a b) moving only up and to the right. 
// For example: if str is (1 1)(2 2) then your program should output 2 because there are only two possible ways to travel 
// from space (1 1) on a chessboard to space (2 2) while making only moves up and to the right. 

function ChessboardTraveling(str) { 
  // Basically moving m squares to the right and n squares to the up 
  // will require m rights and n ups. 
  // The order of them, however, could show variation.
  // m+n moves can be done in (m+n)! ways.
  // m of them are the same, so divide by m!
  // n of them are the same, so divide by n!
  
  str = str.replace(")(", " "); // "(1 1)(2 2)" -> "(1 1 2 2)"
  str = str.replace("(", ""); // "(1 1 2 2)" -> "1 1 2 2)"
  str = str.replace(")", ""); // "1 1 2 2)" -> "1 1 2 2"
  
  let coords = str.split(" "); // "1 1 2 2" -> ["1", "1", "2", "2"]
  
  let x = parseInt(coords[0]);
  let y = parseInt(coords[1]);
  let a = parseInt(coords[2]);
  let b = parseInt(coords[3]);
  
  let m = a - x;
  let n = b - y;
  
  return factorial(m+n)/(factorial(m)*factorial(n)); 
  
    function factorial(n){
      if(n == 0) return 1;
      return n * factorial(n-1);
    }
}
