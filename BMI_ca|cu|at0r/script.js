document.addEventListener("keypress", function (Event) {
    if (Event.key === "Enter") {
      tip();
    }
  });

  function tip() {
    var weight=Number(document.getElementsByTagName("input")[0].value);

    var height=Number(document.getElementsByTagName("input")[1].value);

    var bmi= Number(weight/[height*height]);

    document.getElementsByTagName("input")[2].value=bmi;

    // Underweight: Less than 18.5.
    // Optimum range: 18.5 to 24.9.
    // Overweight: 25 to 29.9.
    // Class I obesity: 30 to 34.9.
    // Class II obesity: 35 to 39.9.
    // Class III obesity: More than 40.



    if (bmi<18.5) {
      document.getElementsByTagName("input")[3].value="Underweight";
    }
if (bmi>18.5 && bmi<24.9) {
  document.getElementsByTagName("input")[3].value=" Optimum range";
 
}
if (bmi>30 && bmi<34.9) {
  document.getElementsByTagName("input")[3].value="Class I obesity";
 
}
if (bmi>35 && bmi<39.9) {
  document.getElementsByTagName("input")[3].value="Class II obesity";
 
}
if (bmi>40) {
  document.getElementsByTagName("input")[3].value="Class III obesity";
 
}

  }
