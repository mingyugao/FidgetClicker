var spins = 0;
var total_spins = 0;
var spent = 0;
function spin() {
  if (spins == 0) {
    first_click = Date();
  }
  spins += 1;
  total_spins += 1;
  document.getElementById("counter").innerText = spins + " spins";
}
document.getElementById("counter").innerText = spins + " spins";