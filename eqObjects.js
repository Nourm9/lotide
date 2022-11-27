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

const eqObjects = function (object1, object2) {
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (const key of Object.keys(object1)) {
      if (typeof object1[key] === "object" && !Array.isArray(object1[key])) {
        return eqObjects(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return eqObjects(object1[key], object2[key]);
      }
    }
  }
  return true;
};
