const router = require("express").Router();
const User = require("../models/User");
const Blog = require("../models/Blog");

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }
  res.render("login");
});

router.get("/homepage", async (req, res) => {
  try {
    const usersData = await User.findAll({});
    const users = usersData.map((user) => user.toJSON());
    const blogData = await Blog.findAll({});
    const blog = blogData.map((blog) => blog.toJSON());
    res.render("homepage", {
      users,
      blog,
    });
  } catch (e) {
    res.status(400).json(e);
  }
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
