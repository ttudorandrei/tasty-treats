// importing dependencies
const { Router } = require("express");

// importing dev created dependencies
const renderHomePage = require("../../controllers/html/renderHomePage");
const renderLeaveAMessagePage = require("../../controllers/html/renderLeaveAMessagePage");
const renderViewMessagesPage = require("../../controllers/html/renderViewMessagesPage");

const router = Router();

// routes
router.get("/view-messages", renderViewMessagesPage);
router.get("/leave-a-message", renderLeaveAMessagePage);
router.get("/", renderHomePage);

module.exports = router;
