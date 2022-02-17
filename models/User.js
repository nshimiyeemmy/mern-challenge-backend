const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  profile: {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
    },
    personal_statement: {
      type: String,
    },
    org_name: {
      type: String,
    },
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  role: {
    type: String,
    enum: ["SAdmin", "Member", "Block"],
    default: "Member",
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
