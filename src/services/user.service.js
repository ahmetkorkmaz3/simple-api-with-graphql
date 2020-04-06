const User = require("../models/User");

module.exports = {
  createUser: async (paramUser) => {
    const newUser = new User(paramUser);
    return await newUser.save();
  },
  getUser: async (id) => {
    const user = await User.findById(id);
    return user;
  },
  getUsers: async () => {
    const users = await User.find();
    return users;
  }
}