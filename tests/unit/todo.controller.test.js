const TodoController = require("../../controller/todo.controller");
const TodoModel = require("../../model/todo.model");

// mock the create function
TodoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });
  it("should call Todomodel.create", () => {
    TodoController.createTodo();
    expect(TodoModel.create).toBeCalled();
  });
});
