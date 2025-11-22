let chosen = [];

function addScent(scent) {
  chosen.push(scent);
  document.getElementById("selected").innerText = chosen.join(', ');
}

function finalMix() {
  if (chosen.length === 0) {
    document.getElementById("result").innerText = "Please pick at least one scent!";
    return;
  }

  let mix = chosen.join(' + ');
  document.getElementById("result").innerText = "Your Perfume Mix: " + mix;
}س