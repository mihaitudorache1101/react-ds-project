const mongoose = require("mongoose");

const Member = mongoose.Schema({
  name: String,
  bio: String,
  age: Number,
});

module.exports = mongoose.model("Member", Member);
