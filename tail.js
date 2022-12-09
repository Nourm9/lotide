const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected};`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
};

console.log(friend);
var friend = "E.T.";
console.log(friend);

const min = function (numbers) {
  // Write code here that returns the smallest value in numbers
  
};

module.exports = tail;