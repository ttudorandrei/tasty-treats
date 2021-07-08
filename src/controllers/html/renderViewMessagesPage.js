// importing Message model
const { Message } = require("../../models");

// renders the view messages page
const renderViewMessagesPage = async (req, res) => {
  try {
    const getMessages = async () => {
      // this finds all of the messages, sorts them by date. the .lean() method is changing the Mongoose Document class into a javascript object
      const sortedMessages = await Message.find({}).sort({ date: 1 }).lean();

      return sortedMessages;
    };

    const data = { message: await getMessages() };

    // we render the view messages page with the data we need
    return res.render("view-messages", { data });
  } catch (error) {
    console.info(error.message);
  }
};

module.exports = renderViewMessagesPage;
