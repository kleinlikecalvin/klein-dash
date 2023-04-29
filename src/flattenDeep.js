/**
 *
 * @param {any[]} array
 * @returns {any[]}
 */

module.exports = function flattenDeep(array) {
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      finalArray.push(array[i]);
    } else {
      if (array[i].length <= 1) {
        let oneElement = array[i][0];
        finalArray.push(oneElement);
      } else {
        let flattened = flattenDeep(array[i]);
        flattened.forEach((element) => finalArray.push(element));
      }
    }
  }
  return finalArray;
};
