const router = require("express").Router();
const { Blog, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) =>{
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User, 
          attributes: ["name", "id"],
        },
        {
          model: Comment,
          attributes: ["comment_body"],
        },
      ],
    });

    const blogPosts = blogData.map((blogPost) => 
    blogPost.get({plain: true})
    );

    res.render("homepage", {
      blogPosts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});

// Export
module.exports = router;