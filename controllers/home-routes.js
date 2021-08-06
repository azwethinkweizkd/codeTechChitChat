const router = require("express").Router();
const User = require("../models/User");
const Blog = require("../models/Blog");

router.get("/", async (req, res) => {
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

router.get("/login", (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }

  res.render("login");
});

router.get("/register", (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }

  res.render("register");
});

router.get("/dashboard", (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }

  res.render("dashboard");
});
module.exports = router;
