/**
 * @param {Array<any>} array
 * @param {number} [size=1] - length of chunk(s)
 * @returns {Array<Array<any>>}
 */

module.exports = function chunk(array, size) {
  if (size === undefined) {
    size = 1;
  } else if (typeof size != "number" || size < 1) {
    throw Error("Size must be a number greater than 0");
  }

  let newArray = [];
  let chunk = [];

  for (let i = 0; i < array.length; i++) {
    if (chunk.length === size) {
      newArray.push(chunk);
      chunk = [];
    }
    chunk.push(array[i]);
  }

  if (chunk.length) {
    newArray.push(chunk);
  }

  return newArray;
};
