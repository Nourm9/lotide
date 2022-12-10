const assertEqual = require("./assertEqual");

const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
return newArr
};


// test
// console.log(typeof tail([1, 2, 3, 4]));

module.exports = tail;