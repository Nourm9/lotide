const eqObjects = require("./eqObjects");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require("util").inspect;
  if (!eqObjects(actual, expected)) {
    console.log(
      `🛑 Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`
    );
  } else {
    console.log(
      `✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`
    );
  }

  console.log(`Example label: ${inspect(actual)}`);
};

module.exports =  assertObjectsEqual;