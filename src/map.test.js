const map = require("./map.js");
describe("map.js", () => {
  test("test 1", () => {
    const result = map([1, 4, 9, 16], (x, index, array) => x * 2);
    const expected = [2, 8, 18, 32];
    expect(result).toEqual(expected);
  });
  test("test 2", () => {
    const result = map([1, 4, 9, 16], (x, index, array) => x * index);
    const expected = [0, 4, 18, 48];
    expect(result).toEqual(expected);
  });
});
