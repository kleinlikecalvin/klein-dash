const flattenDeep = require("./flattenDeep");

describe("flattenDeep.js", () => {
  test("default test", () => {
    const result = flattenDeep([1, 2, [3], [4, [5]]]);
    const expected = [1, 2, 3, 4, 5];
    expect(result).toEqual(expected);
  });
  test("second test", () => {
    const result = flattenDeep(["a", "b", ["c"], ["d", ["e"]]]);
    const expected = ["a", "b", "c", "d", "e"];
    expect(result).toEqual(expected);
  });
  test("third test", () => {
    const f = (value) => ({ value });
    const result = flattenDeep([f("a"), f("b"), [f("c")], [f("d"), f("e")]]);
    const expected = "abcde".split("").map(f);
    expect(result).toEqual(expected);
  });
});
