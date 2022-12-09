const assert = require("chai").assert;

const assertEqual = require("../assertEqual");

describe("#assertEqual", () => {
  it("Should return equal when object1 = 1 and object 2 = 1 ", () => {
    assert.strictEqual(assertEqual(1, 1));
  });
  it("Should return not equal when object 1 ='Lighthouse Labs' and object 2 = 'Bootcamp'", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
});



