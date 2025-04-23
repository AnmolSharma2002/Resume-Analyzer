const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true }, // Encrypted
  iv_name: { type: String, required: true },

  email: { type: String, required: true }, // Encrypted
  iv_email: { type: String, required: true },

  lookupEmail: { type: String, required: true, unique: true }, // Plaintext for login
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
