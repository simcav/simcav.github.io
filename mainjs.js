function showdiv(div1) {
  var divs = ["divhome", "divdown", "divman", "divcon"]
  for (i = 0; i < divs.length; i++) {
    document.getElementById(divs[i]).className = "hidden";
  }
  document.getElementById(div1).className = "nothidden";
}

function showemail() {
  this.innerHTML = "simcav@protonmail.com"
  this.href="mailto:simcav@protonmail.com"
}
  
