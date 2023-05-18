const some = require("./some.js");
describe("some.js", () => {
  it("lodash test", () => {
    const result = some([null, 0, "yes", false], Boolean);
    const expected = true;
    expect(result).toBe(expected);
  });
  it("test 2", () => {
    const result = some([null, 0, "", false], Boolean);
    const expected = false;
    expect(result).toBe(expected);
  });
  it("boolean present test", () => {
    const result = some(
      [null, 0, "yes", false],
      (el) => typeof el === "boolean"
    );
    const expected = true;
    expect(result).toBe(expected);
  });
});
