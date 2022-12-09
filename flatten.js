const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");

const flatten = function (array) {
  let newArray = [];
  for (let i of array) {
    if (Array.isArray(i)) {
      for (let j of i) {
        newArray.push(j);
      }
    } else {
      newArray.push(i);
    }
  }
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;
