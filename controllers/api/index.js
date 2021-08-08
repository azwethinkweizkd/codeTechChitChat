const router = require("express").Router();
const userRoute = require("./userRoute");
const blogRoute = require("./blogRoute");
const replyRoute = require("./replyRoute");

router.use("/users", userRoute);
router.use("/blog", blogRoute);
router.use("/reply", replyRoute);

module.exports = router;
