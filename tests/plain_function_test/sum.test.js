const sum = require("../../plain_functions/sum");

describe("Sum function testing", () => {
  it("properly adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
