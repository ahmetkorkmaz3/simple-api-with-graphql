const BlogService = require("../services/blog.service");
const boom = require("boom");

module.exports = {
  getBlog: async (data) => {
    try {
      const blog = await BlogService.getBlog(data.id);
      return blog;
    } catch (error) {
      throw boom.boomify(console.error);
    }
  },
  getBlogs: async (data) => {
    try {
      const blogs = await BlogService.getBlogs();
      return blogs;
    } catch (error) {
      throw boom.boomify(error);
    }
  },
  createBlog: async (data) => {
    try {
      const createBlog = await BlogService.createBlog(data);
      return createBlog;
    } catch (error) {
      throw boom.boomify(error);
    }
  },
};
