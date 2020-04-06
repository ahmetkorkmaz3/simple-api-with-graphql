const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  userId: ObjectId,
});

module.exports = mongoose.model("Blog", blogSchema);