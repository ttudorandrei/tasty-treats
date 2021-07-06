const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();

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
