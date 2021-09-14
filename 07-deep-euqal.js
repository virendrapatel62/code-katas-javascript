function isDeepEqual(object1, object2) {
  if (object1 === object2) return true;

  if (typeof object1 !== typeof object2) return false;

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  const object1Keys = Object.keys(object1);
  for (key of object1Keys) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = { isDeepEqual };
