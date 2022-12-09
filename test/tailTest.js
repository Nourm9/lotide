const assert = require("chai").assert;
const { expect } = require("chai");
const tail = require("../tail");

describe("#tail", () => {
  it("should return equal when array is [1, 2, 3, 4] and expected is [2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]),[2, 3, 4]);
  });
  it("should return not equal when array is [1, 2, 3, 4] and expected is [4, 3, 2]", () => {
  expect(tail([1, 2, 3, 4])).to.not.deep.equal([4, 3, 4]);
   });
});


