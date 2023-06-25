// Imports
const sequelize = require("../config/connection");
const { User, Blog, Comment } = require("../models");

const userData = require("./userData.json");
const blogData = require("./blogData.json");
const commentData = require("./commentData.json");

// Seeds database with user data, blogPost data, and comment data
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blogPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comments = await Comment.bulkCreate(commentData);

  process.exit(0);
};

// Function call to seed database
seedDatabase();
