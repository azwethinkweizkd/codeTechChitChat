const router = require("express").Router();
const { Blog } = require("../../models");

router.post("blog", async (req, res) => {
  console.log(req.body);
  try {
    const newPost = await Blog.create(req.body);

    res.json({ blo: newPost, message: "Successfully posted to the blog!" });
  } catch (e) {
    res.status(400).json(e);
  }
});

module.exports = router;
