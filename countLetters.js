const assertEqual = require("./assertEqual");

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

module.exports =  countLetters ;
