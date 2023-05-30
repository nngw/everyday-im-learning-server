const User = require('../models/index');

async function index(req, res) {
    try {
        const users = await User.getAll();
        res.status(200).json(users)
    } catch(e) {
      res.status(500).json({ "success": false, "message": "Cannot find that user", "error": e })
    }
}


module.exports = {
  index
}
