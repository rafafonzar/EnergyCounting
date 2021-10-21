let energy = document.getElementById("energyNumber")
let energyValue = parseInt(energy.innerHTML)
let roundNumberChange = document.getElementById("roundNumber")
let roundValue = parseInt(roundNumberChange.innerHTML)

// Funcao 1 Click round
function clickRound() {
    const nextRoundBtn = document.getElementById("nextRoundBtn")
    nextRoundBtn.addEventListener("click", () => {
        if (energyValue < 10) {
            energyValue = energyValue + 2
            roundValue++
            roundNumberChange.innerHTML = roundValue
            energy.innerHTML = energyValue
        } else if(energyValue > 10) {
            energyValue = 10
            energy.innerHTML = energyValue
        }
    }
    )
}
// Funcao 2 Click +
function clickPlus() {
    const plusEnergyBtn = document.getElementById("plusEnergyBtn")
    plusEnergyBtn.addEventListener("click", () => {
        if (energyValue < 10) {
            energyValue++
            energy.innerHTML = energyValue
        }
    })
}
// Funcao 3 Click -
function clickMinus() {
    const minusEnergyBtn = document.getElementById("minusEnergyBtn")
    minusEnergyBtn.addEventListener("click", () => {
        if (energyValue > 0) {
            energyValue--
            energy.innerHTML = energyValue
        }
        console.log(energyValue)
    })
}

// Update html
function updateHTML() {
}
clickRound()
clickPlus()
clickMinus()
