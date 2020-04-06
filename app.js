const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const mongoose = require("mongoose");

const schema = require("./src/schema");
const userController = require("./src/controller/user.controller");

// Connect to DB
mongoose
  .connect("mongodb://localhost:27017/blog-app", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Node is running");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: schema.query,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`Node server is started: ${port}`));
