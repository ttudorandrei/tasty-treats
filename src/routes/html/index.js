// importing dependencies
const { Router } = require("express");

// importing dev created dependencies
const { renderHomePage } = require("../../controllers/html/renderHomePage");

const router = Router();

router.get("/", renderHomePage);

module.exports = router;
