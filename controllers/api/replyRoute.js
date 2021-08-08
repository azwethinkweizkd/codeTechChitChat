const router = require("express").Router();

const { Reply } = require("../../models");

router.post("/comment", async (req, res) => {
  // console.log(req.session.user_id);
  console.log(req.body);
  // console.log(req.body.postTitle);
  try {
    const newReply = await Reply.create({
      comment: req.body.reply,
      blog_id: req.body.blog_id,
      user_id: req.session.user_id,
      //   user_id: req.body.user_id,
    });

    res.json({
      blog: newReply,
      message: "Successfully replied to the blog!",
    });
  } catch (e) {
    res.status(400).json(e);
  }
});
module.exports = router;
