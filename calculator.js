let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('result').value = '0';
}

function calculateResult() {
    if (currentOperator === '/' && currentInput === '0') {
        alert("Cannot divide by zero!");
        clearDisplay();
        return;
    }
    previousInput = currentInput;
    currentInput = eval(previousInput);
    document.getElementById('result').value = currentInput;
    currentOperator = '';
}

function setOperator(operator) {
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
}


// Add these functions to your existing JavaScript file

function convertToUSD() {
    const rateILStoUSD = 0.29; // Replace with actual conversion rate
    currentInput = (parseFloat(currentInput) * rateILStoUSD).toFixed(2);
    document.getElementById('result').value = currentInput;
}

function convertToILS() {
    const rateUSDtoILS = 3.41; // Replace with actual conversion rate
    currentInput = (parseFloat(currentInput) * rateUSDtoILS).toFixed(2);
    document.getElementById('result').value = currentInput;
}

function convertToEUR() {
    const rateILStoEUR = 0.26; // Replace with actual conversion rate
    currentInput = (parseFloat(currentInput) * rateILStoEUR).toFixed(2);
    document.getElementById('result').value = currentInput;
}

function convertToShekels() {
    const rateEURtoILS = 3.84; // Replace with actual conversion rate
    currentInput = (parseFloat(currentInput) * rateEURtoILS).toFixed(2);
    document.getElementById('result').value = currentInput;
}


// Add event listeners for button clicks
document.getElementById('result').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateResult();
    }
});

// You'll need to attach click event listeners to the buttons for digits and operators.
