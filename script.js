//your JS code here. If required.
function removeSelected(){
  var e = document.getElementById("colorSelect");
  e.options[e.selectedIndex].remove();
}