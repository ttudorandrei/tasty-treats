const { Message } = require("../../models");

const viewMessages = async (req, res) => {
  try {
    const messages = await Message.find({});
    res.json(messages);
  } catch (error) {
    console.info(error.message);
  }
};

module.exports = viewMessages;
