function drop(array = [], n = 1) {
  if (n == 0) return array;
  //   for (let i = 0; i < n; i++) {
  //     array.shift();
  //   }
  array.splice(0, n);
  return array;
}

const result = drop([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 2);

console.log(result);
