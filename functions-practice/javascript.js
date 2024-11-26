// Write a function called add7 that takes one number and returns that number + 7.
function add7(a) {
  return a + 7;
}

console.log(add7(7));

// Write a function called multiply that takes 2 numbers and returns their product.
let multiply = function (a, b) {
  return a * b;
};

console.log(multiply(3, 4));

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(string) {
  let allLowerCase = string.toLowerCase();
  return string[0].toUpperCase() + allLowerCase.slice(1);
}
console.log(capitalize('iRResPonSible'));
console.log(capitalize('dEsOlAte'));

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
function lastLetter(text) {
  return text.slice(-1);
}

console.log(lastLetter('peja'));
