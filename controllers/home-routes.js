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
    // const blogData = await Blog.findAll({});
    // const blogs = blogData.map((blog) => blog.toJSON());

    // // console.log(blogData);
    // // console.log(blogs);
    // const usersData = await User.findAll({});
    // const users = usersData.map((user) => user.toJSON());
    // const replies = await Reply.findAll({});
    // // console.log(replies);
    // const reply = replies.map((reply) => reply.toJSON());
    // // console.log(reply);
    // // console.log(users);
    // blogs.forEach((blog) => {
    //   users.forEach((user) => {
    //     if (user.id === blog.user_id) {
    //       blog.user_name = user.user_name;
    //     }
    //   });
    //   reply.forEach((reply) => {
    //     if (blog.id === reply.blog_id) {
    //       blog.comment = reply.comment;
    //     }
    //   });
    // });
    // // reply.forEach((reply) => {
    // //   users.forEach((user) => {
    // //     if (user.id === reply.user_id) {
    // //       blog.replyUsername = user.user_name;
    // //     }
    // //   });
    // // });
    const blogData = await Blog.findAll({
      include: [{ model: User }, { model: Reply }],
    });
    // const replyData = await Reply.findAll({
    //   include: [{ model: Blog }],
    // });
    // console.log(blogData[0].dataValues);
    console.log(blogData[0].dataValues.blog_replies[0].comment);
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
