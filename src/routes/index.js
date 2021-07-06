// importing dependencies
const { Router } = require("express");

// importing dev created dependencies
const htmlRoutes = require("./html");

const router = Router();

router.use("/", htmlRoutes);

module.exports = router;
