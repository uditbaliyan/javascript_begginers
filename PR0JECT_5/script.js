document
  .getElementsByTagName("button")[0]
  .addEventListener("click", myFunctionIncrement);

  document
  .getElementsByTagName("button")[1]
  .addEventListener("click", myFunctionDecrement);


var ivalue=0;

function myFunctionDecrement() {
 
  ivalue--;
  document.getElementsByTagName("P")[0].innerHTML=ivalue;
  
  
}


function myFunctionIncrement() {
  ivalue++;
  document.getElementsByTagName("P")[0].innerHTML=ivalue;
  
}