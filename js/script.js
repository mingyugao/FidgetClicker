var spins = 0;
function spin() {
  if (spins == 0) {
    first_click = Date();
  }
  spins += 1;
  document.getElementById("spins").innerText = spins + " spins";
}
document.getElementById("spins").innerText = spins + " spins";

