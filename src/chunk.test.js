const chunk = require("./chunk");
describe("chunk.js", () => {
  test("test default chunk size", () => {
    const result = chunk(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]);
    const expected = [
      ["a"],
      ["b"],
      ["c"],
      ["d"],
      ["e"],
      ["f"],
      ["g"],
      ["h"],
      ["i"],
      ["j"],
    ];
    expect(result).toEqual(expected);
  });

  test("test chunk size of 3", () => {
    const result = chunk(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3);
    const expected = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], ["j"]];
    expect(result).toEqual(expected);
  });
});
