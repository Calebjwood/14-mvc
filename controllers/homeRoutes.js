const router = require("express").Router();
const {User, Post, Comments} = require('../models')
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
   
    

    //UNCOMMENT WHEN FRONT END IS READY
    const posts = postData.map((post) => post.get({ plain: true }))

    res.render('homepage', {
        posts,
        logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/user", async (req, res) => {
  try {
      const userData = await User.findAll({
        include: [{model: Post}]
      })

      console.log(userData);
      res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json(postData);

    //UNCOMMENT WHEN FRONT END IS READY
    // const post = postData.get({ plain: true })

    // res.render('post', {
    //     ...post,
    //     logged_in: req.session.logged_in
    // })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    res.status(200).json(userData);

    //UNCOMMENT WHEN FRONT END IS READY
    // const user = userData.get({ plain: true })

    // res.render('dashboard', {
    //     ...user,
    //     logged_in: true
    // })
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
