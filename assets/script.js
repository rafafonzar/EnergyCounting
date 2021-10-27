let energyElement = document.getElementById("energyNumber")
let energyValue = parseInt(energyElement.innerHTML)
let roundElement = document.getElementById("roundNumber")
let roundValue = parseInt(roundElement.innerHTML)
const myWallet = "0x2B9cE3e0f8Da30C325B111F7a898886489bD0C41"

// Funcao 1 Click round
function clickRound() {
  const nextRoundBtn = document.getElementById("nextRoundBtn")
  nextRoundBtn.addEventListener("click", () => {
    roundValue++;
    energyValue = Math.min(energyValue + 2, 10);
    updateHTML();
  }
  )
}
// Funcao 2 Click +
function clickPlus() {
  const plusEnergyBtn = document.getElementById("plusEnergyBtn")
  plusEnergyBtn.addEventListener("click", () => {
    energyValue = Math.min(energyValue + 1, 10);
    updateHTML();
  })
}
// Funcao 3 Click -
function clickMinus() {
  const minusEnergyBtn = document.getElementById("minusEnergyBtn")
  minusEnergyBtn.addEventListener("click", () => {
    energyValue = Math.max(energyValue - 1, 0);
    updateHTML()
  })
}
// Funcao 4 Undo
function clickUndo() {
  const undoRoundBtn = document.getElementById("undoRoundBtn")
  undoRoundBtn.addEventListener("click", () => {
    // caso round "roundValue > 1" execute a próxima linha
    roundValue > 1 && (energyValue = Math.min(energyValue - 2, 10));

    // caso round "roundValue > 1" execute a próxima linha
    roundValue > 1 && roundValue--;

    // caso round "roundValue == 1" reset o jogo
    roundValue == 2 && resetGame()
    updateHTML();
  })
}
// Funcao 5 Restart
function clickResetGame() {
  const resetGameBtn = document.getElementById("resetGameBtn")
  resetGameBtn.addEventListener("click", () => {
    resetGame()
  })
}

// Update html
function updateHTML() {
  energyElement.innerHTML = energyValue;
  roundElement.innerHTML = roundValue;
}

// Reset game
function resetGame() {
  energyValue = 3
  roundValue = 1
  updateHTML()
}

function copyWallet() {
  const donateButton = document.getElementById("donateButton")
  donateButton.addEventListener("click", () => {
    console.log(myWallet)
    navigator.clipboard.writeText(myWallet)
    alert(`Metamask Wallet copied: ${myWallet}
Thank you for your colaboration!`);

  })
}

clickRound()
clickPlus()
clickMinus()
copyWallet()
clickUndo()
clickResetGame()