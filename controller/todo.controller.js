const TodoModel = require("../model/todo.model");

exports.createTodo = (req, res, next) => {
  console.log("req data", req.body);
  TodoModel.create(req.body);
};
