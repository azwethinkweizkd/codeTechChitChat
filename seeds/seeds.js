const sequelize = require("../config/connection");
const { User } = require("../models");
const { Blog } = require("../models");
const { Reply } = require("../models");

const userData = require("./userData.json");
const blogData = require("./blogData.json");
const replyData = require("./replyData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Blog.bulkCreate(blogData);

  await Reply.bulkCreate(replyData);

  process.exit(0);
};

seedDatabase();
