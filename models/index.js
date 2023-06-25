// Imports
const User = require("./user");
const Blog = require("./blog");
const Comment = require("./comments");

// Sets up relationship between tables and allows me to join them using Sequelize
User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Blog, {
  foreignKey: "blogPost_id",
  onDelete: "CASCADE",
});

Blog.hasMany(Comment, {
  foreignKey: "blogPost_id",
  onDelete: "CASCADE",
});

// Export
module.exports = { User, Blog, Comment };
