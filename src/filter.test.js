var filter = require("./filter.js");
describe("filter.js", () => {
  test("test 1", () => {
    const result = filter(
      [
        { user: "barney", age: 36, active: true },
        { user: "fred", age: 40, active: false },
      ],
      (o) => !o.active
    );
    const expected = [{ user: "fred", age: 40, active: false }];
    expect(result).toEqual(expected);
  });
  test("test 2", () => {
    const result = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (num) => num > 5);
    const expected = [6, 7, 8, 9, 10];
    expect(result).toEqual(expected);
  });
  test("test 3", () => {
    const result = filter(
      [5, 9, 3, 10, 4, 6, 2, 7, 8, 1, 0],
      (num, i) => num < i
    );
    const expected = [2, 1, 0];
    expect(result).toEqual(expected);
  });
});
