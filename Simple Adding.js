// This function adds numbers from 1 to n

// A recursive solution
function SimpleAdding(num) { 
  if(num == 0) return 0;
  return num + SimpleAdding(num-1); 
}

// An algebraic solution would be nicer, i think.
function SimpleAddingAlg(num) { 
   if(num >= 0) return num * (num + 1) / 2;
   return 0;
}
