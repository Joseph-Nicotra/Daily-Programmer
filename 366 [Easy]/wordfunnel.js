const fs = require("fs");
// Initialize words object
const words = {};

// Load enable1 word list from text file into array
let enable1 = fs.readFileSync("enable1.txt", "utf8").split("\n");

// Map words to length for easier checking
// Loop through each word in enable1 list
for (let word of enable1) {
    // Get length of word
    let len = word.length;
    // If words object already has length as key, push to array
    if (len in words) words[len].push(word);
    // Else, set to new array containing word
    else words[len] = [word];
}

/**
 * 
 * @param {String} a Start string
 * @param {String} b End string
 * 
 * @return {Boolean} Whether the second can be made from the first by removing one letter
 */
function funnel(a, b) {
    // False if end string not 1 character shorter than start
    if (b.length != a.length - 1) return false;
    // Loop from 1 to length of start string
    for (let i = 1; i <= a.length; i++) {
        // Remove character at i
        let temp = a.slice(0, i - 1) + a.slice(i);
        // Return true if new string is equal to end string
        if (temp == b) return true;
    }
    // End string not contained in first
    return false;
}

/**
 * 
 * @param {String} str Input string
 * 
 * @return {String[]} Words that can be made by removing one letter from the string
 */
function bonus(str) {
    // Get length of string
    let len = str.length;
    // Initialize array for valid words
    let arr = [];
    // Loop from 1 to length of string
    for (let i = 1; i <= len; i++) {
        // Remove character at i
        let temp = str.slice(0, i-1) + str.slice(i);
        // If temp is a in the words object, add to arr
        if (arr.indexOf(temp) == -1 && words[len - 1] != undefined && words[len - 1].indexOf(temp) > -1) arr.push(temp);
    }
    // Return array of words
    return arr;
}

console.log(funnel("leave", "eave"));       // => true
console.log(funnel("reset", "rest"));       // => true
console.log(funnel("dragoon", "dragon"));   // => true
console.log(funnel("eave", "leave"));       // => false
console.log(funnel("sleet", "lets"));       // => false
console.log(funnel("skiff", "ski"));        // => false

console.log(bonus("dragoon"));      // => ["dragon"]
console.log(bonus("boats"));        // => ["oats", "bats", "bots", "boas", "boat"]
console.log(bonus("affidavit"));    // => []
