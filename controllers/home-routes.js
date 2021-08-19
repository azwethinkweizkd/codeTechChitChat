const router = require("express").Router();
const { User, Blog, Reply } = require("../models");
const loggedIn = require("../utils/helpers");

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }
  res.render("login");
});
router.get("/register", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }

  res.render("register");
});
router.get("/homepage", loggedIn, async (req, res) => {
  try {
    // console.log("\n\n\nI am here\n\n\n");
    const blogData = await Blog.findAll({
      include: [{ model: User }, { model: Reply, include: [User] }],
    });

    const blogs = blogData.map((blog) => blog.toJSON());

    res.status(200).render("homepage", {
      blogs,
    });
  } catch (e) {
    res.status(400).json(e);
  }
});
router.get("/dashboard", loggedIn, (req, res) => {
  res.render("dashboard");
});

module.exports = router;
