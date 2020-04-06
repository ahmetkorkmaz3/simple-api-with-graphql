const Blog = require("../models/Blog");

module.exports = {
  createBlog: async (paramBlog) => {
    const newBlog = new Blog(paramBlog);
    return await newBlog.save();
  },
  getBlog: async (id) => {
    const blog = await Blog.findById(id);
    return blog;
  },
  getBlogs: async () => {
    const blogs = await Blog.find();
    return blogs;
  }
}