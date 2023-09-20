const router = require("express").Router();
const { Comments } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const comData = await Comments.create({
      comment_text: req.body.commentText,
      posted_by: req.session.name,
      post_id: req.session.post_id,
    });

    res.status(201).json(comData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const comData = Comments.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!comData) {
      res.status(400).json({ message: "No comment at thiss id" });
    }
    res.status(204).json(comData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
