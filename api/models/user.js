const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    iv_name: { type: String, required: true },
    iv_email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// ✅ Prevent OverwriteModelError
module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
