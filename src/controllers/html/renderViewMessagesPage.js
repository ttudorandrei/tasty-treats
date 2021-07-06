const { Message } = require("../../models");

const renderViewMessagesPage = async (req, res) => {
  try {
    const getMessages = async () => {
      const sortedMessages = await Message.find({}).sort({ date: -1 });
      console.log(sortedMessages);

      return sortedMessages;
    };

    const data = { messages: await getMessages() };

    return res.render("view-messages", { data });
  } catch (error) {
    console.info(error.message);
  }
};

module.exports = renderViewMessagesPage;
