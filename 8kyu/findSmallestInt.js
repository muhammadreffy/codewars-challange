// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
// Given an array of integers your solution should find the smallest integer.

// First Solution
// const findSmallestInt = (arr) => Math.min(...arr);

// Second Solution
const findSmallestInt = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

console.log(findSmallestInt([34, 15, 88, 2]));
