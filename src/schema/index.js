const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const userController = require("../controller/user.controller");
const blogController = require("../controller/blog.controller");

const userType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLID },
    surname: { type: GraphQLID },
    email: { type: GraphQLID },
    website: { type: GraphQLID },
  }),
});

const blogType = new GraphQLObjectType({
  name: "Blog",
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLID },
    content: { type: GraphQLID },
    userId: { type: GraphQLID },
    user: {
      type: userType,
      async resolve(parent, args) {
        return await userController.getUser({ id: parent.userId });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    blog: {
      type: blogType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await blogController.getBlog(args);
      },
    },
    user: {
      type: userType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        return await userController.getUser(args);
      },
    },
    blogs: {
      type: GraphQLList(blogType),
      async resolve(parent, args) {
        return await blogController.getBlogs();
      },
    },
    users: {
      type: GraphQLList(userType),
      async resolve(parent, args) {
        return await userController.getUsers();
      },
    },
  },
});

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addUser: {
      type: userType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        surname: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLString },
        website: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const data = await userController.createUser(args);
        return data;
      },
    },
    addBlog: {
      type: blogType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args) {
        const data = await blogController.createBlog(args);
        return data;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
