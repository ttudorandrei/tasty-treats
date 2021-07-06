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
  try {
    const { fullName, email, userMessage, newsletterCheck, date } = req.body;

    if ((fullName && email && userMessage & newsletterCheck, date)) {
      await Message.create({
        fullName,
        email,
        userMessage,
        newsletterCheck,
        date,
      });

      return res.status(200).json({ data: "Message successfully added" });
    }

    return res.status(400).json({ error: "Could not create message." });
  } catch (error) {
    console.info(error.message);
  }
};

module.exports = { viewMessages, addNewMessage };
