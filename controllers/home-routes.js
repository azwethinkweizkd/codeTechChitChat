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
    const blogData = await Blog.findAll({
      include: [{ model: User }, { model: Reply }],
    });

    // const replyData = await Reply.findAll({
    //   include: [{ model: User }],
    // });
    // console.log(blogData[0].dataValues);
    console.log(blogData[0].dataValues.blog_replies[0]);
    // console.log(replyData[0].dataValues);

    const blogs = blogData.map((blog) => blog.toJSON());
    // const replys = replyData.map((reply) => reply.toJSON());
    // console.log(replys);
    res.status(200).render("homepage", {
      blogs,
      // replys,
    });
  } catch (e) {
    res.status(400).json(e);
  }
});
router.get("/dashboard", loggedIn, (req, res) => {
  res.render("dashboard");
});

module.exports = router;
