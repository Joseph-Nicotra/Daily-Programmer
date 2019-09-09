let input = "010111111111100100101000100110111000101111001001011011000011000".split("");

/**
 * 
 * @param {Integer} index Index of card to remove
 */
function remove(index) {
    // If valid index & card is face-up
    if (index >= 0 && index <= input.length-1 && input[index] == 1) input[index] = ".";
    // Invalid position, return
    else return;
    // Flip card to the left (if valid)
    if (index > 0 && input[index-1] != ".") input[index-1] = (input[index-1] == 1) ? "0" : "1";
    // Flip card to the right (if valid)
    if (index < input.length - 1 && input[index+1] != ".") input[index+1] = (input[index+1] == 1) ? "0" : "1";
}

// Initialize order array
let order = [];

/**
 * Removes first occurance of "1" in string
 */
function removeNext() {
    // Get first index of "1"
    let index = input.indexOf("1");
    // Add index to order array
    order.push(index);
    // Remove value at index
    remove(index);
    // If there are still 1s, remove
    if (input.indexOf("1") != -1) removeNext();
}

// First call
removeNext();

// If there is still a face-down card, position was invalid
if (input.indexOf("0") != -1) console.log("Invalid board state");
// Else log order
else console.log(order.join(", "));
