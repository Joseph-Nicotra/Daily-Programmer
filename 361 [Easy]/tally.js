// Initialize readline w/ config
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get console input
function getInput() {
    // Send question & wait for response
    rl.question("Enter the scores: ", answer => {
        // Initialize scores object
        let scores = {};
        // Filter for only letters
        let chars = answer.match(/[a-zA-Z]/g);
        // Loop through each letter
        for (let char of chars) {
            // Get lowercase letter
            let lower = char.toLowerCase();
            // If letter is uppercase
            if (char != lower) {
                // Letter is uppercase
                // Decrease score in scores object at letter by 1
                if (lower in scores) scores[lower]--;
                else scores[lower] = -1;
            } else {
                // Letter is lowercase
                // Increase score in scores object at letter by 1
                if (lower in scores) scores[lower]++;
                else scores[lower] = 1;
            }
        }
        // Initialize array to convert to
        let arr = [];
        // Object to array
        for (let key in scores) {
            arr.push([key, scores[key]]);
        }
        // Sort array by score in descending order
        arr.sort((a, b) => b[1] - a[1]);
        // Loop through each score
        for (let score of arr) {
            // Log score to console
            console.log(`${score[0]}: ${score[1]}`);
        }
        // Get another input
        getInput();
    });
}
// First function call
getInput();
