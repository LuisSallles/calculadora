function insert(num) {
    var number = document.getElementById('calculator-result').innerHTML 
    document.getElementById('calculator-result').innerHTML = number + num
}

function reset() {
    window.document.getElementById('calculator-result').innerHTML = ''
}