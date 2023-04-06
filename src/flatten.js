/**
 * @param {any[]} array
 * @returns {any[]}
 */
module.exports = function flatten(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!Array.isArray(element)) {
      newArray.push(element);
    } else {
      for (let j = 0; j < element.length; j++) {
        const elementJ = element[j];
        newArray.push(elementJ);
      }
    }
  }
  return newArray;
};
