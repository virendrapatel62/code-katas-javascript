const { isDeepEqual } = require("./07-deep-euqal");

function dropRightWhile(inputArray = [], predicate) {
  const array = [...inputArray];

  if (!predicate) return array;
  let index = array.length - 1;

  if (typeof predicate === "function") {
    while (predicate(array[index])) {
      array.pop();
      index--;
    }
  }

  const comparingObject = predicate;
  while (!isDeepEqual(array[index], comparingObject)) {
    array.pop();
    console.log(index);

    if (index == 0) {
      break;
    }
    index--;
  }

  if (isDeepEqual(array[index], comparingObject)) {
    array.pop();
  }

  return array;
}

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];

console.log(dropRightWhile(users, { user: "fgfg", active: true }));
