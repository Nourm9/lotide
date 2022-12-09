const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("Should return true when array1 equals [1,2,3] and array2 equals [1,2,3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("Should return false when array1 equals [1,2,3] and array2 equals [3,2,1]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it("Should return true when array1 equals ['a','b','c'] and array2 equals ['a','b','c']", () => {
    assert.isTrue(eqArrays(["a", "b", "c"], ["a", "b", "c"]));
  });
  it("Should return false when array1 equals ['1','2','3'] and array2 equals ['1','2', 3]", () => {
    assert.isFalse(eqArrays(["a", "b", "c"], ["a", "b", 3]));
  });
});
