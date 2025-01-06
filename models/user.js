const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  instituteName: String,
  phoneNumber: String,
  email: String,
  password: String,
  instituteType: {
    type: String,
    enum: ["playhouse", "school", "college", "competitiveexamcenter"],
    default: "school"
  },
  role: {
    type: String,
    enum: ["institute", "admin"],
    default: "institute",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
