const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

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

module.exports =  eqObjects;