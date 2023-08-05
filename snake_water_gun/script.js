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
      document.getElementsByTagName("img")[1].setAttribute("src", "img/snake");
      comp = "s";
  
      break;

    case 2:
      document.getElementsByTagName("img")[1].setAttribute("src", "img/water");
      comp = "w";

  
      break;

    case 3:
      document
        .getElementsByTagName("img")[1]
        .setAttribute("src", "img/gun");

      comp = "g";
  
      break;

    default:
      document
        .getElementsByTagName("img")[1]
        .setAttribute("src", "img/gun");
      comp = "g";



      break;
  }

  switch (user_input.toLowerCase()) {
    case "s":
      // Set image for rock
      document.getElementsByTagName("img")[0].setAttribute("src", "img/snake");
      break;
  
    case "w":
      // Set image for paper
      document.getElementsByTagName("img")[0].setAttribute("src", "img/water");
      break;
  
    case "g":
      // Set image for scissors
      document.getElementsByTagName("img")[0].setAttribute("src", "img/gun");
      break;
  
    default:
      // Set default image (e.g., scissors)
      document.getElementsByTagName("img")[0].setAttribute("src", "img/gun");
      break;
  }
  if (
  
  
    (user_input.toLowerCase() === "s" && comp.toLowerCase() === "s") ||
    (user_input.toLowerCase() === "w" && comp.toLowerCase() === "w") ||
    (user_input.toLowerCase() === "g" && comp.toLowerCase() === "g")
  ) {
    document.getElementsByTagName("p")[0].innerHTML = "TIE";
  }
  if (
    (user_input.toLowerCase() === "s" && comp.toLowerCase() === "w") ||
    (user_input.toLowerCase() === "w" && comp.toLowerCase() === "g") ||
    (user_input.toLowerCase() === "g" && comp.toLowerCase() === "s")
  ) {
    document.getElementsByTagName("p")[0].innerHTML = "USER WON";
  }
  if (
    (user_input.toLowerCase() === "w" && comp.toLowerCase() === "s") ||
    (user_input.toLowerCase() === "g" && comp.toLowerCase() === "w") ||
    (user_input.toLowerCase() === "s" && comp.toLowerCase() === "g")
  ) {
    document.getElementsByTagName("p")[0].innerHTML = "COMP WON";
  }
  
}
