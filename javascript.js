// Inserting numbers on the screen
function insert(num) {
    var numRes = document.getElementById('calculator-result').innerHTML
    document.getElementById('calculator-result').innerHTML = num + numRes
}

// Reset all numbers
function reset() {
    document.getElementById('calculator-result').innerHTML = ''
}

// Clean only a number on the screen
function del() {
    var reset = document.getElementById('calculator-result').innerHTML
    document.getElementById('calculator-result').innerHTML = reset.substring(0, reset.length -1)
}