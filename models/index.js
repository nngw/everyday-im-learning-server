const client = require("../database/setup-db");

class Users {
  constructor(data) {
    this.username = data.username;
    this.tasks = data.tasks;
    this.timer = data.timer;
  }

    static async getAll() {
      await client.connect()
      const res = client.db('protect-the-pandas').collection('users').find()
      const allUsers = await res.toArray()
      return allUsers
    }
    //get user by id
    static async getUserById(id) {
      await client.connect()
      const res = client.db('protect-the-pandas').collection('users').find({id: [id]})
      const user= await res.toArray()
      return user
    }
    //get /users/:id/tasks
    static async getUserTasks(id) {
      await client.connect()
      const res = client.db('protect-the-pandas').collection('users').find({id: [id]})
      const allUserTasks = await res.toArray()
      return allUserTasks
    }
     //get /users/:id/tasks/:task_id
     static async getTaskById(id) {
      await client.connect()
      const res = client.db('protect-the-pandas').collection('users').find({task: {id: [id]}})
      const UserTask = await res.toArray()
      return UserTask
    }


    //post users/id/tasks/id
    static async createUserTask(user_Id,task_Id, task_deets) {
      await client.connect()
      const res = client.db('protect-the-pandas').collection('users').find(user_Id)
      const data = await res.insertMany({id: [task_Id], info: [task_deets]});
      return new Users(data)
    }

    async destroyUser(user_Id) {
      await client.connect()
      const res = client.db('protect-the-pandas').collection('users').find(user_Id)
      const data = await res.deleteOne({id: user_Id});
      return new Users(data)
    }

    async deleteUserTask(user_Id,task_id) {
      await client.connect()
      const res = client.db('protect-the-pandas').collection('users').find(user_Id)
      const data = await res.deleteOne({task:{id: [task_id]}});
      return new Users(data)
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
