const express = require("express");
const {
  registerUser,
  authUser,
  updateUserProfile,
} = require("../Controllers/userControllers");
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();

router.route("/").post(registerUser); // this is an api end point
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile);
module.exports = router;
