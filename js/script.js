var spins = 0;
var first_click;
function spin() {
  if (spins == 0) {
    first_click = Date();
  }
  spins += 1;
  document.getElementById("spins").innerText = spins + " spins";
  setInterval(updateAPM, 1000);
//  updateAPM();
}
document.getElementById("spins").innerText = spins + " spins";

function updateAPM(){
  var now = Date();
  var time_since = now - first_click;
  var time_since_mins = (time_since / 1000) / 60;
  var apm = Math.round(spins/time_since_mins);
  document.getElementByID("apm").innerText = apm;
}
