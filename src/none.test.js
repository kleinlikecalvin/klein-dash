const none = require("./none.js");
describe("none.js", () => {
  it("first", () => {
    const result = none([true, 1, null, "yes"], Boolean);
    const expected = false;
    expect(result).toBe(expected);
  });
  it("second", () => {
    const result = none([false, 0, null, ""], Boolean);
    const expected = true;
    expect(result).toBe(expected);
  });
});
