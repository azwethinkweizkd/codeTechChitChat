const router = require("express").Router();
const userRoutes = require("./userRoute");
const blogRoutes = require("./blogRoute");
const replyRoutes = require("./replyRoute");

router.use("/users", userRoutes);
router.use("/blog", blogRoutes);
router.use("/reply", replyRoutes);

module.exports = router;
