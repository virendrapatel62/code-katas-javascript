function compact(array = []) {
  const result = [];
  array.forEach((item) => {
    if (item) {
      result.push(item);
    }
  });
  return result;
}

function compact2(array = []) {
  //   return array.filter(function (item) {
  //     return item;
  //   });

  return array.filter((item) => item);
}

const result = compact([true, 1, 2, 0, null, undefined, "Virendra"]);
const result2 = compact2([true, 1, 2, 0, null, undefined, "Virendra"]);

console.log(result);
console.log(result2);
