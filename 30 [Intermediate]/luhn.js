function validate(num) {
    // Convert string input to array of numbers
    num = num.match(/\d/g).map(Number);
    // Don't multiply the first digit
    let mult = false;
    // Initialize sum to 0
    let sum = "";
    // Loop through backwards
    for (let i = num.length - 1; i >= 0; i--) {
        sum += num[i] * (mult ? 2 : 1);
        mult = !mult;
    }
    let total = 0;
    for (let digit of sum.split("").map(Number)) total += digit;
    return total % 10 == 0;
}

function getCheck(num) {
    // Convert string input to array of numbers
    num = num.match(/\d/g).map(Number);
    // Don't multiply the first digit
    let mult = true;
    // Initialize sum to 0
    let sum = "";
    // Loop through backwards
    for (let i = num.length - 1; i >= 0; i--) {
        sum += num[i] * (mult ? 2 : 1);
        mult = !mult;
    }
    let total = 0;
    for (let digit of sum.split("").map(Number)) total += digit;
    return 10 - (total % 10);
}

console.log(getCheck("4992739871")); // 6
console.log(validate("49927398716")); // True
