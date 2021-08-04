const router = require("express").Router();
const { User } = require("../../models");

router.post("/users", async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    if (newUser) {
      return res.redirect("/");
    }
  } catch (e) {
    res.json(401).json({ message: "Bad Request" });
  }
});

module.exports = router;
