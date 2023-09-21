const router = require("express").Router();
const { Post, Comments } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      name: req.body.title,
      post_text: req.body.postText,
      posted_by: req.session.name,
      user_id: req.session.user_id,
    });

    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.update(
      {
        name: req.body.title,
        post_text: req.body.postText,
      },
      {
        where: {
          id: req.params.id,
        },
      },
      
    );

    res.status(201).json(postData)
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
