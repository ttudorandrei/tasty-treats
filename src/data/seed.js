// importing mongoose
const mongoose = require("mongoose");

// importing model and seed data
const { Message } = require("../models");
const messagesData = require("./messages");

// creating db options, name and url
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const DB_NAME = "tastyBakeryDb";

const DB_URL = process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

// connect to database
mongoose.connect(DB_URL, dbOptions);

// initializing seed
const init = async () => {
  try {
    // awaits for Messages to be inserted into the db and it prints the data.
    const messages = await Message.insertMany(messagesData);

    console.info(`Messages successfully seeded`);

    // after the file was seeded, the connection is going to be closed
    mongoose.connection.close();

    // If there`s an error, the message is going to be printed.
  } catch (error) {
    console.info(error.message);
  }
};

init();
