
const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
    }
  }
  console.log(`✅✅✅  Assertion Passed: ${array1}  ===  ${array2}`);
};

const letterPositions = function(string) {
  let position = {};
  const letters = string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if (!letters[i].match(/  /g)) {
        if (!position[letters[i]]) position[letters[i]] = [];
        position[letters[i]].push(i);
      }
    }
  }
  return position;
};
