// dependencies
const express = require("express");
const cors = require("cors");
const path = require("path");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

// importing dev created dependencies
const routes = require("./routes");
const logger = require("./middleware/logger");

// assigning a port
const PORT = process.env.PORT || 3000;

// creating db options, name and url
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const DB_NAME = "tastyBakeryDb";

const DB_URL = process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

// connect to mongoose database using the assigned database url and option
mongoose.connect(DB_URL, dbOptions);

// creating express application
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "../", "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);
app.use(routes);

// adding helpers to handlebars
const hbs = handlebars.create();

// setting handlebars as the view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// this function will run the server
const init = async () => {
  try {
    app.listen(PORT, () =>
      console.info(`\nServer running on http://localhost:${PORT}\n`)
    );
  } catch (error) {
    console.info(error);
    console.error("Failed to connect to DB");
  }
};

init();
