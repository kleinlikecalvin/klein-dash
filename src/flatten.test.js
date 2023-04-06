const flatten = require("./flatten");
describe("flatten.js", () => {
  test("default test", () => {
    const result = flatten([1, [2, [3, [4]], 5]]);
    const expected = [1, 2, [3, [4]], 5];
    expect(result).toEqual(expected);
  });
  test("test 2", () => {
    const result = flatten(["a", ["b"], ["c"], [["d"]], "e"]);
    const expected = ["a", "b", "c", ["d"], "e"];
    expect(result).toEqual(expected);
  });
  test("test 3", () => {
    const result = flatten(["a", ["b", "c", "d"], "e"]);
    const expected = ["a", "b", "c", "d", "e"];
    expect(result).toEqual(expected);
  });
});
