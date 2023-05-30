const client = require("../database/setup-db");

class Users {
  constructor(data) {
    this.username = data.username;
    this.tasks = data.tasks;
    this.timer = data.timer;
  }

  static async getAll() {
    await client.connect();
    const res = client.db("protect-the-pandas").collection("users").find();
    const allUsers = await res.toArray();
    return allUsers;
  }

  static async updateUser(userId, updatedData) {
    await client.connect();
    const filter = { _id: userId };
    const update = { $set: updatedData };
    const options = { returnOriginal: false };
    const result = await client
      .db("protect-the-pandas")
      .collection("users")
      .findOneAndUpdate(filter, update, options);
    return result.value;
  }

  static async updateTaskById(userId, taskId, updatedData) {
    await client.connect();
    const filter = { _id: userId, "tasks._id": taskId };
    const update = { $set: { "tasks.$": updatedData } };
    const options = { returnOriginal: false };
    const result = await client
      .db("protect-the-pandas")
      .collection("users")
      .findOneAndUpdate(filter, update, options);
    return result.value;
  }
}

module.exports = Users;
