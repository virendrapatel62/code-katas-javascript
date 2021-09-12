function difference(array = [], values = []) {
  const result = [];

  array.forEach((item) => {
    !values.find((value) => value === item) ? result.push(item) : null;
  });
  return result;
}

const result = difference([2, 1, 5, 6, 7, 8], [2, 3, 5, 45, 65]);

console.log(result);

// [1, 6, 7, 8]

function differenceBy(array = [], values = [], iteratee) {
  const result = [];

  array.forEach((item) => {
    if (typeof iteratee === "function") {
      !values.find((value) => iteratee(value) === iteratee(item))
        ? result.push(item)
        : null;
    }

    if (typeof iteratee == "string") {
      !values.find((value) => value[iteratee] === item[iteratee])
        ? result.push(item)
        : null;
    }
  });
  return result;
}

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));

console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x"));
