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

const middle = function(array) {
 let  middleArr = [];
  if (array.length < 3) {
    return middleArr;
  } else if (array.length % 2 === 0) {
    let x = array.length / 2 - 1;
    middleArr.push(array[x]);
    middleArr.push(array[x + 1]);
  } else {
    let y = (array.length - 1) / 2;
    middleArr.push(array[y]);
  }
  return middleArr;
};

// tests
console.log(middle([1])) // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]