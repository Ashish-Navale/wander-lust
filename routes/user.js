const express = require("express");
const router = express.Router();
const User = require("../models/user"); 
const wrapAsync = require("../utils/wrapAsync.js"); 
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userConrtroller = require("../controllers/users");


router.route("/signup")
.get(userConrtroller.renderSignupForm)
.post(wrapAsync(userConrtroller.signup));


router.route("/login")
.get( userConrtroller.renderLoginForm)
.post(
  saveRedirectUrl,
  passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
  userConrtroller.login
);

// Logout
router.get("/logout", userConrtroller.logout);

module.exports = router;
