
const assert = require("chai").assert;

const assertArraysEqual = require("../assertArraysEqual");


assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

module.exports = assertArraysEqual;

