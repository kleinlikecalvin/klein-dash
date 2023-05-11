/**
 * @param {Object} destination
 * @param {Object} source
 * @returns {Object}
 */

module.exports = function merge(destination, source) {
  if (destination === null) {
    return source;
  }
  for (const key in source) {
    if (typeof source[key] === "object") {
      destination[key] = merge(destination[key], source[key]);
    } else {
      destination[key] = source[key];
    }
  }
  return destination;
};
