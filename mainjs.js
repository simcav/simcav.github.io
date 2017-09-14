window.onload = function showdiv(div1) {
  var divs = ["divhome", "divdown", "divman", "divcon"]
  for (i = 0; i < divs.length; i++) {
    document.getElementById(divs[i]).className = "hidden";
  }
  document.getElementById(divs1).className = "nothidden";
}
