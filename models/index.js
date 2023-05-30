const client = require("../database/setup-db")

class Users {
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

}

module.exports = Users;
