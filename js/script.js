var spins = 0;

function spin() {
  spins += 1;
  document.getElementById("spins").innerText = spins + " spins";
}

document.getElementById("spins").innerText = spins + " spins";
