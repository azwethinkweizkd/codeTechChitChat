const User = require("./User");
const Blog = require("./Blog");
const Reply = require("./Reply");

Blog.hasMany(Reply, {
  foreignKey: "blog_id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Reply.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Blog, Reply };
