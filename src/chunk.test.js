const chunk = require("./chunk");

test("chunk.js", () => {
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
