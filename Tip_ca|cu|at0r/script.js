document.addEventListener("keypress", function (Event) {
    if (Event.key === "Enter") {
      tip();
    }
  });

  function tip() {
    var bill=document.getElementsByTagName("input")[0].value;

    var tip_percent=document.getElementsByTagName("input")[1].value;

    var tip1 =bill*tip_percent/100;

    document.getElementsByTagName("input")[2].value=tip1;

    document.getElementsByTagName("input")[3].value=Number(bill)+Number(tip1);
    
  }