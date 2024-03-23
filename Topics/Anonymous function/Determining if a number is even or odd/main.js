// Importing the required library
const readline = require('readline');

// Create Readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    // Create the anonymous function here
    const evenOrOdd = function (number) {
        console.log(number % 2 === 0 ? 'Even' : 'Odd');
    };
    // Use the anonymous function to process the 'input'
    evenOrOdd(input);

    // Closing the readline interface
    rl.close();
});