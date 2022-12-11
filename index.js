/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("btn")
let ConMeterFeet = document.getElementById("ConvertMeterFeet")
let ConLitersGallons = document.getElementById("ConvertLitersGallons")
let ConKilogramsPounds = document.getElementById("ConvertKilogramsPounds")
let newValue = document.getElementById("value")

const feet = 3.281
const gallon = 0.264
const kilogram = 2.204
let result 

function MeterToFeet(num){
    result = num * feet
    return Number(result).toFixed(3)
}
function FeetToMeter(num){
     result = num/feet
     return Number(result).toFixed(3)
}

function LiterToGallon(num){
    result = num * gallon
    return Number(result).toFixed(3)
}
function GallonToLiter(num){
     result = num/gallon
     return Number(result).toFixed(3)
}

function KiloToPound(num){
    result = num * kilogram
    return Number(result).toFixed(3)
}
function PoundToKilo(num){
     result = num/kilogram
     return Number(result).toFixed(3)
}

convertBtn.addEventListener("click" , function(){
    ConMeterFeet.innerHTML = `<p id="text"> ${inputEl.value} meters = 
     ${newValue.textContent = MeterToFeet(inputEl.value)} feet |
     ${inputEl.value} feet = ${newValue.textContent = FeetToMeter(inputEl.value)} meters </p>`
     
     ConLitersGallons.innerHTML = `<p id="text"> ${inputEl.value} liters = 
     ${newValue.textContent = LiterToGallon(inputEl.value)} gallons |
     ${inputEl.value} gallons = ${newValue.textContent = GallonToLiter(inputEl.value)} liters </p>`
     
     ConKilogramsPounds.innerHTML = `<p id="text"> ${inputEl.value} kilos = 
     ${newValue.textContent = KiloToPound(inputEl.value)} pounds |
     ${inputEl.value} pounds = ${newValue.textContent = PoundToKilo(inputEl.value)} kilos </p>`
     inputEl.value = ""
})


