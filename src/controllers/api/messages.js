// importing model
const { Message } = require("../../models");

// this will render all of the messages in our database
const viewMessages = async (req, res) => {
  try {
    const messages = await Message.find({});
    res.json(messages);
  } catch (error) {
    console.info(error.message);
  }
};

// endpoint to add a new message to the database
const addNewMessage = async (req, res) => {
  try {
    // destructuring the data we need from req.body
    const { fullName, email, userMessage, newsletterCheck, date } = req.body;

    // if all of the data is present, it is stored in the database, else, and error is thrown
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
