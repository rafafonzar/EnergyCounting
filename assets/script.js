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

// Update html
function updateHTML() {
    energyElement.innerHTML = energyValue;
    roundElement.innerHTML = roundValue;
}



function copyWallet() {
    const donateButton = document.getElementById("donateButton")
    donateButton.addEventListener("click", () => {
        console.log(myWallet)
        navigator.clipboard.writeText(myWallet)
        alert(`Wallet copied: ${myWallet}
Thank you for your colaboration!`);

    })    
}

clickRound()
clickPlus()
clickMinus()
copyWallet()