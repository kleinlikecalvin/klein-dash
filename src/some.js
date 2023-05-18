/**
 * @param {any[]} collection
 * @param {Function} predicate
 * @returns {boolean}
 */
module.exports = function some(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i], i, collection)) {
      return true;
    }
  }
  return false;
};
