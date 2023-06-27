// Imports
const router = require("express").Router();
const { User } = require("../../models");

// Posts the new user email, username, and password that was created to database
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      console.log(userData, 'hi');
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// When a user signs in as an existing user, this route examines the user's credentials and logs the user in if a match in the database is discovered.
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      console.log("User not found");
      res
        .status(400)
        .json({ message: "Your email or password is incorrect, please try again!" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      console.log("Password does not match");
      res
        .status(400)
        .json({ message: "Your email or password is incorrect, please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in. HELLO!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// When user logs out, the session is ended
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Exports
module.exports = router;
