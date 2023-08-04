document
  .getElementsByTagName("button")[0]
  .addEventListener("click", myFunction);



function myFunction() {
 
  var message=document.getElementsByTagName("input")[0].value;
  document.getElementsByTagName("input")[1].value = message;
  
}
