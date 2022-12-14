const assertEqual = require("./assertEqual");

// Implement the function findKeyByValue which takes in an object and a value.
const findKeyByValue = function (object, value) {
  // It should scan the object and return the first key which contains the given value.
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
