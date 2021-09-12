function chunk(array = [], size = 1) {
  if (!array || !size) return array;
  const result = [];
  let startIndex = 0;
  let endIndex = size;
  const numberOfInnerArrays = Math.ceil(array.length / size);
  for (let index = 0; index < numberOfInnerArrays; index++) {
    result.push(array.slice(startIndex, endIndex));
    startIndex += size;
    endIndex += size;
  }
  return result;
}

const result1 = chunk(["a", "b", "c", "d"], 2);
// => [['a', 'b'], ['c', 'd']]
const result2 = chunk(["a", "b", "c", "d"], 3);
// => [['a', 'b', 'c'], ['d']]
chunk(null, 0);

console.log(result1);
console.log(result2);
