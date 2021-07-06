let calculation = 0

function addNumber(number) {
    document.getElementById('result').value += number
}

function reset() {
    document.getElementById('result').value = ''
}

function addOperator(operator) {
    document.getElementById('result').value += operator
}

function sum(numbers) {
    let total = 0

    numbers.forEach(number => {
        total = total + Number(number)
    });
    return total
}

function sub(numbers) {
    let total = 0

    for (let index = 0; index < numbers.length; index++) {
        if(index + 1 < numbers.length){
            total = numbers[index] - numbers[index+1]
        } 
    }

    return total
}

function multiply(numbers) {
    let total = 0

    for (let index = 0; index < numbers.length; index++) {
        if(index + 1 < numbers.length){
            total = numbers[index] * numbers[index+1]
        } 
    }

    return total
}

function div(numbers) {
    let total = 0

    for (let index = 0; index < numbers.length; index++) {
        if(index + 1 < numbers.length){
            total = numbers[index] / numbers[index+1]
        } 
    }

    return total
}

function calculate() {
    const values = document.getElementById('result').value

    let operator = ''

    for (value in values) {
        if (isNaN(Number(values[value]))) {
            operator = values[value]
        }
    }

    const numbers = values.split(operator)

    let result = 0

    if (operator === '+')
        result = sum(numbers)
    else if (operator === '-')
        result = sub(numbers)
    else if (operator === '*')
        result = multiply(numbers)
    else
        result = div(numbers)

    document.getElementById('result').value = result
}