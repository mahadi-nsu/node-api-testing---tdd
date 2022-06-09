const Todocontroller = require("../../controller/todo.controller");

describe("Todocontroller.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof Todocontroller.createTodo).toBe("function");
  });
});
