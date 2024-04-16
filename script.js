document.getElementById("btn").addEventListener("click", calcTrapazoid);

function calcTrapazoid() {
  var b1 = +document.getElementById("b1").value;
  var b2 = +document.getElementById("b2").value;
  var h = +document.getElementById("h").value;
  var dcp = +document.getElementById("dcp").value;
  var answer = b1 + b2;
  answer = answer / 2;
  answer = answer * h;
  answer = answer.toFixed(dcp);
  document.getElementById("boom").src = "images/check.png";
  document.getElementById("boom2").src = "images/check.png";
  document.getElementById("boom3").src = "images/check.png";
  document.getElementById("boom4").src = "images/check.png";
  document.getElementById("output").innerHTML = answer;
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("h").value = "";
  document.getElementById("dcp").value = "";
}
