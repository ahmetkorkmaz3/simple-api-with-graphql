const UserService = require("../services/user.service");
const boom = require("boom");

module.exports = {
  getUser: async (data) => {
    try {
      const user = await UserService.getUser(data.id);
      return user;
    } catch (error) {
      throw boom.boomify(console.error);
    }
  },
  getUsers: async (data) => {
    try {
      const users = await UserService.getUsers();
      return users;
    } catch (error) {
      throw boom.boomify(error);
    }
  },
  createUser: async (data) => {
    try {
      const createuser = await UserService.createUser(data);
      return createuser;
    } catch (error) {
      throw boom.boomify(error);
    }
  },
};
