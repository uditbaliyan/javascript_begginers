document.addEventListener("keypress", function (Event) {
  if (Event.key === "Enter") {
    random_output_generator();
  }
});

function random_output_generator() {
  var ram = Math.floor(Math.random() * 3) + 1;
  var comp;
  var user_input = document.getElementsByTagName("input")[0].value;
  switch (ram) {
    case 1:
      document.getElementsByTagName("img")[1].setAttribute("src", "img/r0ck");
      comp = "r";
  
      break;

    case 2:
      document.getElementsByTagName("img")[1].setAttribute("src", "img/paper");
      comp = "p";

  
      break;

    case 3:
      document
        .getElementsByTagName("img")[1]
        .setAttribute("src", "img/sciss0rs");

      comp = "s";
  
      break;

    default:
      document
        .getElementsByTagName("img")[1]
        .setAttribute("src", "img/sciss0rs");
      comp = "s";



      break;
  }

  switch (user_input.toLowerCase()) {
    case "r":
      // Set image for rock
      document.getElementsByTagName("img")[0].setAttribute("src", "img/r0ck");
      break;
  
    case "p":
      // Set image for paper
      document.getElementsByTagName("img")[0].setAttribute("src", "img/paper");
      break;
  
    case "s":
      // Set image for scissors
      document.getElementsByTagName("img")[0].setAttribute("src", "img/sciss0rs");
      break;
  
    default:
      // Set default image (e.g., scissors)
      document.getElementsByTagName("img")[0].setAttribute("src", "img/sciss0rs");
      break;
  }
  if (
  
  
    (user_input.toLowerCase() === "r" && comp.toLowerCase() === "r") ||
    (user_input.toLowerCase() === "p" && comp.toLowerCase() === "p") ||
    (user_input.toLowerCase() === "s" && comp.toLowerCase() === "s")
  ) {
    document.getElementsByTagName("p")[0].innerHTML = "TIE";
  }
  if (
    (user_input.toLowerCase() === "r" && comp.toLowerCase() === "s") ||
    (user_input.toLowerCase() === "p" && comp.toLowerCase() === "r") ||
    (user_input.toLowerCase() === "s" && comp.toLowerCase() === "p")
  ) {
    document.getElementsByTagName("p")[0].innerHTML = "USER WON";
  }
  if (
    (user_input.toLowerCase() === "s" && comp.toLowerCase() === "r") ||
    (user_input.toLowerCase() === "r" && comp.toLowerCase() === "p") ||
    (user_input.toLowerCase() === "p" && comp.toLowerCase() === "s")
  ) {
    document.getElementsByTagName("p")[0].innerHTML = "COMP WON";
  }
  
}
