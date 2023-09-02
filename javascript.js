// To show numbers in the screem
function insert(txtnum) {
    var num = document.getElementById('calculator-result').innerHTML
    document.getElementById('calculator-result').innerHTML = txtnum + num
}

// Reset all numbers
function reset() {
    document.getElementById('calculator-result').innerHTML = ''
}

// back one number
function back() {
    var back = document.getElementById('calculator-result').innerHTML
    document.getElementById('calculator-result').innerHTML = back.substring(0, back.length -1)
}

// Calculate the numbers
function calculate() {
    var result = document.getElementById('calculator-result').innerHTML
    if(result) {
        document.getElementById('calculator-result').innerHTML = eval(result)
    }
}