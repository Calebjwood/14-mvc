const sequelize = require("../config/connections");
const User = require("../models/User");
const Post = require("../models/Post");
const Comments = require("../models/Comments");

const userData = require("./userData.json");
const postData = require("./postData.json");
const commentData = require("./commentsData.json");

const seedDataBase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const post = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comments.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDataBase();
