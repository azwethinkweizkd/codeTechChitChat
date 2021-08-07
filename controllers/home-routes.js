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
    console.log(users);
    const blogData = await Blog.findAll({});
    const blogs = blogData.map((blog) => blog.toJSON());
    blogs.forEach((blog) => {
      users.forEach((user) => {
        if (user.id === blog.user_id) {
          blog.user_name = user.user_name;
        }
      });
    });
    console.log(blogs);
    res.render("homepage", {
      users,
      blogs,
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
