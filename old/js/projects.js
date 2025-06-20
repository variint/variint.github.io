/*tmp = String(window.location.href);

if (tmp.includes("#")) {
  href_id = tmp.split("#")[1];
}else{
  href_id = "decentnet";
  window.location.href += "#decentnet";
}

console.log(href_id);
*/ 

var href_id = sessionStorage.getItem("id");
console.log(href_id)
if (!href_id){
	href_id="decentnet"
}
current_button = document.getElementById(href_id);
current_button.className += " active";
filterSelection(href_id);

function filterSelection(c) {

  console.log(c)

  sessionStorage.setItem('id', c);

  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}