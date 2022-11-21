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
