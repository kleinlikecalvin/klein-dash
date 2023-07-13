/**
 * @param {any[]} collection
 * @param {Function} callback
 * @param {any} [accumulator]
 * @returns {any}
 */
module.exports = function reduce(collection, callback, accumulator) {
  let i = 0;
  if (accumulator === undefined) {
    accumulator = collection[0];
    i = 1;
  }
  for (; i < collection.length; i++) {
    accumulator = callback(accumulator, collection[i]);
  }
  return accumulator;
};
