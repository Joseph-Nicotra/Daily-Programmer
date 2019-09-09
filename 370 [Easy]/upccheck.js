// Initialize readline w/ config
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get console input
function getInput() {
    // Send question & wait for response
    rl.question("Enter the first 11 digits of a UPC-A code: ", answer => {
        // Split into array of digits, filtering out any other characters
        answer = answer.match(/[0-9]/g);
        // Error if length > 11
        if (answer.length > 11) {
            console.log("Invalid code! Must have 11 digits");
            getInput();
            return;
        }
        // Pad with 0s until 11 digits long
        while (answer.length < 11) answer.unshift("0");
        // Convert elements to numbers
        answer = answer.map(Number);
        // Initialize sum to 0
        let sum = 0;
        // Loop through digits
        for (let i = 0; i < answer.length; i++) {
            // Get digit at index
            let num = answer[i];
            // If i % 2, add num * 3
            if (i % 2 == 0) sum += num * 3;
            // Else add num
            else sum += num;
        }
        // Get sum % 10
        let m = sum % 10;
        // Calculate last digit (0 if 0, else 10 - m)
        let last = (m == 0) ? 0 : 10 - m;
        // Log check digit
        console.log("Check digit: " + last);
        // Log complete code
        console.log("Complete code: " + answer.join("") + last);
        // Get next input
        getInput();
    });
}
// First function call
getInput();
