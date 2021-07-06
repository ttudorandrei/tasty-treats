const { Message } = require("../../models");

const renderViewMessagesPage = async (req, res) => {
  try {
    const getMessages = async () => {
      const sortedMessages = await Message.find({}).sort({ date: -1 }).lean();

      return sortedMessages;
    };

    const data = { message: await getMessages() };

    console.log(data.message);

    return res.render("view-messages", { data });
  } catch (error) {
    console.info(error.message);
  }
};

module.exports = renderViewMessagesPage;
