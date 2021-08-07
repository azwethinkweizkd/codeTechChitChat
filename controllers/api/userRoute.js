const router = require("express").Router();
const { User } = require("../../models");

router.post("/register", async (req, res) => {
  try {
    const newUserData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    if (newUserData) {
      return res.redirect("/homepage");
    }
  } catch (e) {
    res.json(401).json({ message: "Bad Request" });
  }
});

module.exports = router;
