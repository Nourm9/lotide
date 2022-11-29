let results = ["a", "b", "c", "d", "e", "f"];

const takeUntil = function (array, cb) {
  let resultArray = [];
  for (let item of array) {
    if (!cb(item)) {
    resultArray.push(item);
    } else {
      break;
    }
  }
  return resultArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);


const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
