/**
 * @param {any[]} array
 * @param {Function} callback
 * @returns {any[]}
 */
module.exports = function map(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
};
