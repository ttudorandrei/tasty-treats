// importing dependencies
const mongoose = require("mongoose");

// creating a new Schema
const Schema = mongoose.Schema;

const messageSchema = {
  fullName: {
    type: String,
    required: true,
  },
  userMessage: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  newsletterCheck: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
};

// building a schema with our preferences
const MessageSchema = new Schema(messageSchema);

// creating a new model using the schema
const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
