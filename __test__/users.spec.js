const request = require("supertest");
const app = require("../app");

describe("api server", () => {
  let api;

  beforeAll(() => {
    api = app.listen(6000, () => {
      console.log("Test server running on port 6000");
    });
  });

  afterAll((done) => {
    console.log("Gracefully stopping test server");
    api.close(done);
  });

  it("updateUser responds with 200 status code", (done) => {
    const updatedData = { name: "Sean O'Beirne" };
    const userId = 1;
    request(api).put(`/users/${userId}`).send(updatedData).expect(200, done);
  });

  it("updateUser responds with 404 status code", (done) => {
    const updatedData = { name: "Sean O'Beirne" };
    const userId = 9999;
    request(api)
        .put(`/users/${userId}`)
        .send(updatedData)
        .expect(404, done);
    });

  it("updateTasks responds with 200 status code", (done) => {
    const updatedData = { description: "This is a test task" };
    const userId = 1; 
    const taskId = 1;

    request(api)
      .put(`/users/${userId}/tasks/${taskId}`)
      .send(updatedData)
      .expect(200, done);
  });

  it("updateTasks responds with 404 status code", (done) => {
    const updatedData = { description: "This is a test task" };
    const userId = 9999;
    const taskId = 9999;
    request(api)
      .put(`/users/${userId}/tasks/${taskId}`)
      .send(updatedData)
      .expect(404, done);
  });

});
