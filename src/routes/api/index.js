// importing dependencies
const { Router } = require("express");

// importing dev created dependencies
const {
  addNewMessage,
  viewMessages,
} = require("../../controllers/api/messages");
// const viewMessages = require("../../controllers/api/viewMessages");

const router = Router();

router.post("/add-new-message", addNewMessage);
router.get("/view-messages", viewMessages);

module.exports = router;
