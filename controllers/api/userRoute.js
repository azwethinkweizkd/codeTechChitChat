const router = require("express").Router();
const { User } = require("../../models");

router.post("/register", async (req, res) => {
  try {
    const newUserData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = newUserData.id;
      req.session.logged_in = true;

      res.json({ user: newUserData, message: "You are now logged in!" });
    });
  } catch (e) {
    res.json(401).json(e);
  }
});

module.exports = router;
