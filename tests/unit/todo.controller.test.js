const TodoController = require("../../controller/todo.controller");
const TodoModel = require("../../model/todo.model");
var httpMocks = require("node-mocks-http");
const newTodo = require("../mock-data/new-todo.json");
// mock the create function
TodoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof TodoController.createTodo).toBe("function");
  });
  it("should call Todomodel.create", () => {
    let req, res, next;
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
    req.body = newTodo;
    TodoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });
});
