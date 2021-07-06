const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = {
  fullName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  newsletterCheck: {
    type: Boolean,
    required: true,
  },
};

const MessageSchema = new Schema(messageSchema);

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
