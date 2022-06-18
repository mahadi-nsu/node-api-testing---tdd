const supertest = require("supertest");
const app = require("../../app");

describe("POST /users", () => {
  describe("Given a username and password", () => {
    // should save the username and passwod into the database
    // should respond with a json object containing the user id in it
    // should respond with a 200 status code
    // should specify json in the content type header
  });

  describe("When username and password is missing", () => {
    // should respond with a 404 status code
    // probably some validation error
  });
});
