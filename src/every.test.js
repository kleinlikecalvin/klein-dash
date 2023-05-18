const every = require("./every.js");
describe("every.js", () => {
  it("test 1", () => {
    const result = every([true, 1, null, "yes"], Boolean);
    const expected = false;
    expect(result).toBe(expected);
  });
  it("test 2", () => {
    const result = every([true, 1, true, "yes"], Boolean);
    const expected = true;
    expect(result).toBe(expected);
  });
});
