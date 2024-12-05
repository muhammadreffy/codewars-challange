// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// First solution
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(7));
console.log(evenOrOdd(10));

// Second solution
const evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");

console.log(evenOrOdd(7));
console.log(evenOrOdd(10));

// Third solution
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(7));
console.log(evenOrOdd(10));
