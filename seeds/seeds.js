const sequelize = require("../config/connection");
const { User } = require("../models");
const { Blog } = require("../models");

const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Blog.bulkCreate(blogData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
