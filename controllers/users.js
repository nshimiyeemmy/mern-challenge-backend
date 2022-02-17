const asyncHandler = require("../middleware/async");
const User = require("../models/User");

// @desc      Get all users
// @route     GET /api/users
// @access    Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    data: users,
  });
});
