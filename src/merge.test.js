const merge = require("./merge");
describe("merge.js", () => {
  test("default test", () => {
    const result = merge({a: [{b: 2}, {d: 4}]}, {a: [{c: 3}, {e: 5}]});
    const expected = {
      a: [
        {b: 2, c: 3},
        {d: 4, e: 5},
      ],
    };
    expect(result).toEqual(expected);
  });
  test("test 2", () => {
    const result = merge({a: 5}, {b: 5});
    const expected = {a: 5, b: 5};
    expect(result).toEqual(expected);
  });
  test("test 3", () => {
    const result = merge({a: [1]}, {a: [2]});
    const expected = {a: [2]};
    expect(result).toEqual(expect);
  });
});
