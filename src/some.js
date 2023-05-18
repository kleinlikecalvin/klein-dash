/**
 * @param {any[]} collection
 * @param {Function} predicate
 * @returns {boolean}
 */
module.exports = function some(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return true;
    }
  }
  return false;
};
