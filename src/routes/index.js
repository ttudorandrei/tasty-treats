// importing dependencies
const { Router } = require("express");

// importing dev created dependencies
const htmlRoutes = require("./html");
const apiRoutes = require("./api");

const router = Router();

router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;
