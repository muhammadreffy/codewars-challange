// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
// Create a method to see whether the string is ALL CAPS.

// First Solution
String.prototype.isUpperCase = function () {
  return String(this) === this.toUpperCase();
};

console.log("ACSKLDFJSgSKLDFJSKLDF".isUpperCase());
console.log("ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase());

// Second solution
function isTheStringUppercase(string) {
  if (string == string.toUpperCase()) {
    return "True";
  } else {
    return "False";
  }
}

// Third Solution
const isTheStringUppercase = (string) =>
  /^[A-Z]+$/.test(string) ? "True" : "False";

// Fourth Solution
const isTheStringUppercase = (string) => string === string.toUpperCase();

console.log(isTheStringUppercase("ACSKLDFJSgSKLDFJSKLDF"));
console.log(isTheStringUppercase("ACSKLDFJSGSKLDFJSKLDFJ"));
