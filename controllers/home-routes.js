const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const usersData = await User.findAll({});
    const users = usersData.map((user) => user.toJSON());
    res.render("homepage", {
      users,
    });
  } catch (e) {
    res.status(400).json(e);
  }
});

module.exports = router;
