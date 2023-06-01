/**
 * @param {any[]} collection
 * @param {Function} predicate
 * @returns {any[]}
 */
module.exports = function filter(collection, predicate) {
  let newArray = [];
  for (let i = 0; i < collection.length; i++) {
    var passesPredicate = predicate(collection[i], i, collection);
    if (passesPredicate) {
      newArray.push(collection[i]);
    }
  }
  return newArray;
};
