const calculatorDisplay = document.querySelector('h1')
const inputBtns = document.querySelectorAll('button')
const clearBtn = document.getElementById('clear-btn')

let firstValue = 0
let operatorValue = ''
let awaitingNextValue = false


function sendNumberValue(number) {
    // console.log(number)
   if (awaitingNextValue) {
    calculatorDisplay.textContent = number
    awaitingNextValue = false
   } else {
    const displayValue = calculatorDisplay.textContent
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number 
   }
}

function addDecimal() {
    if(awaitingNextValue) return
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
    }
}

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent)
    if (!firstValue) {
        firstValue = currentValue
    } else {
        console.log('current', currentValue)
    }
    awaitingNextValue = true
    operatorValue = operator
    console.log('firstValue', firstValue)
    console.log('operator', operatorValue)
 
 }

// Add Event Listeners For Numbers Operators and Decimal Buttons
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value))
    } else if (inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value))
    } else if (inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', () => addDecimal())
    }
})

function resetAll() {
    firstValue = 0
    operatorValue = ''
    awaitingnextValue = false
    calculatorDisplay.textContent = '0'
}

clearBtn.addEventListener('click', resetAll)