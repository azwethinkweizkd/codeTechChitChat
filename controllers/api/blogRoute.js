const router = require("express").Router();
const { Blog } = require("../../models");

router.post("/post", async (req, res) => {
  console.log(req.body);
  console.log(req.body.postTitle);
  try {
    const newPost = await Blog.create({
      title: req.body.postTitle,
      content: req.body.postContent,
    });

    res.json({ blog: newPost, message: "Successfully posted to the blog!" });
  } catch (e) {
    res.status(400).json(e);
  }
});

module.exports = router;
