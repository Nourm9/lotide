const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected};`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let newObject = {};
  for (let letter of string) {
    if (!newObject[letter]) {
      console.log("letter", letter);
      newObject[letter] = 1;
    } else {
      newObject[letter] += 1;
    }
  }
  return newObject;
};


