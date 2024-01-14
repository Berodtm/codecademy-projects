// Select the input, button, and display elements
const submitButton = document.getElementById('submit-factorial-form');
const mainCalculation = document.getElementById('calculation');
const otherCalcs = document.getElementById('more-calc');
const form = document.querySelector('form');
const inputElement = document.getElementById('input-element');

// Factorial function remains the same
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to log factorials up to n and update the DOM
function logFactorialsUpToN(n, factorialCallback) {
    for (let i = 1; i <= n; i++) {
        let factorialResult = factorialCallback(i);
        console.log('Factorial of ' + i + ' = ' + factorialResult);
        otherCalcs.innerText += 'Factorial of ' + i + ' = ' + factorialResult + '\n';
    }
}

// Event listener for the submit button
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const numberInput = document.getElementById('input-element').value;
    let numberValue = parseInt(numberInput, 10);

    // Clear previous results
    mainCalculation.innerText = '';
    otherCalcs.innerText = '';
    inputElement.style.border = '';

    // Check if numberValue is a valid number
    if (!isNaN(numberValue)) {
        mainCalculation.innerText = 'Factorial of ' + numberValue + ' = ' + factorial(numberValue);
        logFactorialsUpToN(numberValue, factorial);
    } else {
        mainCalculation.innerText = 'Please enter a valid number';
        inputElement.style.border = '2px solid red';
        
    }
});



/*  OG code before using DOM
 
 // work out factorial of n
    function factorial(n) {
    let result = 1; // Start with 1
   for (let i = 2; i <= n; i++) { // Loop from 2 to n
     result *= i; // Multiply result by i each time
   }
   return result; // Return the final result
 }
 
 // extra function to calculate previous factorial nos
 function logFactorialsUpToN(n, factorialCallback) {
   for (let i = 1; i <= n; i++) {
     let factorialResult = factorialCallback(i);
     console.log('Factorial of ' + i + ' = ' + factorialResult);
   }
 }
 
 
 logFactorialsUpToN(5, factorial);
*/