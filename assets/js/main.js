// console.log("it works")

let doubleZahl = document.getElementById('zahl');
let output = document.getElementById('output');
// console.log(doubleZahl);


function results() {
    console.log(doubleZahl.value * 2)
    output.innerHTML = doubleZahl.value * 2
}