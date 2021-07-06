// importing dependencies
const { Router } = require("express");

// importing dev created dependencies
const renderHomePage = require("../../controllers/html/renderHomePage");
const renderLeaveAMessagePage = require("../../controllers/html/renderLeaveAMessagePage");

const router = Router();

router.get("/leave-a-message", renderLeaveAMessagePage);
router.get("/", renderHomePage);

module.exports = router;
