const cloneArray = require("../../plain_functions/cloneArray");

describe("Clone array testing", () => {
  it("should clone the given array", () => {
    const array = [1, 2, 3];
    expect(cloneArray(array)).toEqual(array);
  });
});
