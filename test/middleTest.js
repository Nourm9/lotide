const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("tail should return [2,3] when array is [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("tail should return not [3,4] when array is [1, 2, 3, 4] and expected is [2, 3, 4]", () => {
    assert.notDeepEqual(middle([1, 2, 3, 4]), [3,4]);
  });
   it("tail should return [3] not  when array is [1, 2, 3, 4, 5] ", () => {
     assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
   });

});
