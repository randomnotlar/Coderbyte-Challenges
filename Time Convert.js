// Have the function TimeConvert(num) take the num parameter being passed and 
// return the number of hours and minutes the parameter converts to 
// (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 

// I wished javascript to do integer division when 70/60 is called and floating division when 70.0/60.0
// However this was not the case. Stackoverflow suggests Math.floor()

function TimeConvert(num) {
  return (Math.floor(num/60)).toString() + ":" + (num%60).toString();  
}
