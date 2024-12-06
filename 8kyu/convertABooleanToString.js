// https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
// Implement a function which convert the given boolean value into its string representation.

// first solution
function booleanToString(b) {
  if (b === true) return "true";

  if (b === false) return "false";
}

// // Second solution
const booleanToString = (b) => (b ? "true" : "false");

// Third solution
const booleanToString = (b) => String(b);

console.log(booleanToString(true));
console.log(booleanToString(false));
