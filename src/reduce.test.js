const reduce = require("./reduce.js");
describe("reduce.js", () => {
  test("test 1", () => {
    const result = reduce(
      [1, 4, 9, 16],
      (acc, current, index, array) => acc + current
    );
    const expected = 30;
    expect(result).toEqual(expected);
  });
  test("test 2", () => {
    const result = reduce(
      [
        { id: "57", x: "0", y: 0 },
        { id: "34", x: "0", y: 0 },
        { id: "50", x: "0", y: 0 },
        { id: "22", x: "0", y: 0 },
        { id: "8", x: "0", y: 0 },
      ],
      (acc, current, index, array) => {
        return { ...acc, [current.id]: current };
      },
      {}
    );
    const expected = {
      57: { id: "57", x: "0", y: 0 },
      34: { id: "34", x: "0", y: 0 },
      50: { id: "50", x: "0", y: 0 },
      22: { id: "22", x: "0", y: 0 },
      8: { id: "8", x: "0", y: 0 },
    };
    expect(result).toEqual(expected);
  });
});
