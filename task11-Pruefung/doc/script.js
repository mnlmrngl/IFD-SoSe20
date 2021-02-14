function collapse(head) {
    console.log('head'+head)
    var content = head.firstChild;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}


function openLink(evt, animName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(animName).style.display = "block";
    evt.currentTarget.className += " w3-red";
  }