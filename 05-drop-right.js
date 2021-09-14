function dropRight(array = [], n = 1) {
  if (n == 0) return array;

  if (n > array.length) return [];

  //   for (let i = 0; i < n; i++) {
  //     array.pop();
  //   }

  array.splice(array.length - n, n);

  return array;
}

const result = dropRight([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 4);

console.log(result);
