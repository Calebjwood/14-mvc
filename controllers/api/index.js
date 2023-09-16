const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentsRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentsRoutes);

module.exports = router;
