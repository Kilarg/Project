const input = document.getElementById("loan-amount");
const years = document.getElementById("loan-years");
const rate = document.getElementById("loan-rate");
const span = document.getElementById("payment");
const div = document.getElementById("div");
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let X = parseInt(input.value);
    let Y = parseInt(years.value);
    let Z =parseFloat(rate.value);
    span.value = (X / Z) / Y;
    let spanValue = span.value;
    return spanValue;
});