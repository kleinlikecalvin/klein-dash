/*
 * @params {Array<any>} array
 * @params {number} [size=1] - length of chunk(s)
 * @returns {Array<any>}
 */
module.exports = function chunk(array, size) {
  if (size <= 1) {
    return array;
  }

  let newArray = [];
  let chunk = [];

  for (let i = 0; i < array.length; i++) {
    if (chunk.length === size) {
      newArray.push([chunk]);
      chunk = [];
    }
    chunk.push([array[i]]);
  }

  if (chunk.length) {
    newArray.push(chunk);
  }

  return newArray;
};
