function showdiv(div1) {
  var divs = ["divhome", "divwhy", "divdown", "divcon", "divdona"]
  for (i = 0; i < divs.length; i++) {
    document.getElementById(divs[i]).className = "hidden";
  }
  document.getElementById(div1).className = "nothidden";
}

function showemail() {
  document.getElementById('email').innerHTML = "simcav@protonmail.com"
}
  
