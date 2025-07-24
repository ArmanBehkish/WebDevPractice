/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input_num = 0
let len_meter = 0
let len_feet = 0
let vol_gal = 0
let vol_lit = 0
let mass_kilo = 0
let mass_pound = 0

const convert_button = document.getElementById("convert-btn")
const input_field = document.getElementById("value-box")
const len_box = document.getElementById("length-box")
const vol_box = document.getElementById("volume-box")
const mass_box = document.getElementById("mass-box")

convert_button.addEventListener("click",function(){
    input_num = Number(input_field.value)
    calculate_measures(input_num)
    render_measures()
})

function calculate_measures(num){
    len_feet = num * 3.281
    len_meter = num / 3.281

    vol_gal = num * 0.264 
    vol_lit = num / 0.264 

    mass_kilo = num / 2.204
    mass_pound = num * 2.204
}

function render_measures(){
        num = String(input_num)
        len_box.innerHTML = `${num} meters = ${len_feet.toFixed(2)} feet | ${num} feet = ${len_meter.toFixed(2)} meters`

        vol_box.innerHTML = `${num} liters = ${vol_gal.toFixed(2)} gallons | ${num} gallons = ${vol_lit.toFixed(2)} liters`

        mass_box.innerHTML = `${num} kilos = ${mass_pound.toFixed(2)} pounds | ${num} pounds = ${mass_kilo.toFixed(2)} kilos`
}