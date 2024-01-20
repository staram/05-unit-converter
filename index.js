let convertButton = document.getElementById("input-btn")
let inputEl = document.getElementById("input-value")

let inputNumber = document.getElementById("input-number")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.28084
const literToGallon = 0.264172
const kilogramToPound = 2.20462

convertButton.addEventListener("click", function() { 
    let baseValue = inputEl.value
    let length1 = baseValue * meterToFeet
    let length2 = baseValue * 1/meterToFeet
    let volume1 = baseValue * literToGallon
    let volume2 = baseValue * 1/literToGallon
    let mass1 = baseValue * kilogramToPound
    let mass2 = baseValue * 1/kilogramToPound

    lengthEl.textContent = `${baseValue} m = ${length1.toFixed(3)} ft | ${baseValue} ft = ${length2.toFixed(3)} m`

    volumeEl.textContent = `${baseValue} L = ${volume1.toFixed(3)} US gal | ${baseValue} US gal = ${volume2.toFixed(3)} L`

    massEl.textContent = `${baseValue} kg = ${mass1.toFixed(3)} lb | ${baseValue} lb = ${mass2.toFixed(3)} kg`
})