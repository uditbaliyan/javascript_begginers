document.addEventListener("keypress", function (Event) {
  if (Event.key === "Enter") {
    guess_num();
  }
});
 var random_num = Number(Math.floor(Math.random ()* 100));
function guess_num() {
  var num = Number(document.getElementsByTagName("input")[0].value);
 

  if (num < random_num) {
    document.getElementsByTagName("input")[1].value = "guess a higher number";
  }
  if (num == random_num) {
    document.getElementsByTagName("input")[1].value = "you got it right";
  }
  if (random_num < num) {
    document.getElementsByTagName("input")[1].value = "guess a lower number";
  }
}
