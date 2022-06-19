const request = require("supertest");
const app = require("../../app");

describe("POST /users", () => {
  describe("Given a username and password", () => {
    // should save the username and passwod into the database
    // should respond with a json object containing the user id in it
    // should respond with a 200 status code
    it("should respond with a status code of 200", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password",
      });

      expect(response.statusCode).toBe(200);
    });
    // should specify json in the content type header
    it("should specify json in the content type header", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password",
      });

      expect(response.header["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    it("response has userId" , async () => {
        const response = await request(app).post("/users").send({
            username: "username",
            password: "password",
          });
    
         expect(response.body.userId).toBeDefined();
    })
  });

  describe("When username and password is missing", () => {
    // should respond with a 404 status code
    // probably some validation error
  });
});
