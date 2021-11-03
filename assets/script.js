let energyElement = document.getElementById("energyNumber");
let energyValue = parseInt(energyElement.innerHTML);
let roundElement = document.getElementById("roundNumber");
let roundValue = parseInt(roundElement.innerHTML);
const myWallet = "0x2B9cE3e0f8Da30C325B111F7a898886489bD0C41";

// Funcao 1 Click round
function nextRoundClick() {
  roundValue++;
  energyValue = Math.min(energyValue + 2, 10);
  updateHTML();
}
// Funcao 2 Click +
function addEnergyClick() {
  energyValue = Math.min(energyValue + 1, 10);
  updateHTML();
}
// Funcao 3 Click -
function removeEnergyClick() {
  energyValue = Math.max(energyValue - 1, 0);
  updateHTML();
}
// Funcao 4 Undo
function undoRoundClick() {
  if(roundValue > 1) {
    energyValue = Math.max(energyValue - 2, 0);
    roundValue--;
    updateHTML();
  }
}
// Funcao 5 Restart
function resetGameClick() {
  energyValue = 3;
  roundValue = 1;
  updateHTML();
}

// Update html
function updateHTML() {
  energyElement.innerHTML = energyValue;
  roundElement.innerHTML = roundValue;
}

// Funcao 6 Copy Wallet
function copyWallet() {
    navigator.clipboard.writeText(myWallet)
    alert(`Metamask Wallet copied: ${myWallet}.\nThank you for your colaboration!`);
}