const { Message } = require("../../models");

const viewMessages = async (req, res) => {
  try {
    const messages = await Message.find({});
    res.json(messages);
  } catch (error) {
    console.info(error.message);
  }
};

const addNewMessage = async (req, res) => {
  console.log("hit");
};

module.exports = { viewMessages, addNewMessage };
