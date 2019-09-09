// Initialize readline w/ config
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get console input
function getInput() {
    // Send question & wait for response
    rl.question("Enter the string: ", answer => {
        // Initialize counts object
        let counts = {};
        // Filter for only lowercase letters
        let chars = answer.match(/[a-zA-Z]/g);
        // Loop through each letter
        for (let char of chars) {
            // Add 1 to count for letter
            if (char in counts) counts[char]++;
            else counts[char] = 1;
        }
        // Initialize amount to undefined
        let amount;
        // Loop through counts keys
        for (let key in counts) {
            // If amount is undefined, set to count
            if (amount == undefined) amount = counts[key];
            // If other letter amounts not equal to first amount, log false
            else if (counts[key] != amount) {
                // Log false
                console.log("False");
                // Get next input
                getInput();
                return;
            }
        }
        console.log("True");
        getInput();
    });
}
// First function call
getInput();
