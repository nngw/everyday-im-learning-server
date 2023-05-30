const client = require("../database/setup-db")

class User {
    constructor(data) {
      this.username = data.username
      this.tasks = data.tasks
      this.timer = data.timer
    }

    static async getAll() {
      await client.connect()
      const res = client.db('protect-the-pandas').collection('users').find()
      const allUsers = await res.toArray()
      return allUsers
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
}

module.exports = User;
