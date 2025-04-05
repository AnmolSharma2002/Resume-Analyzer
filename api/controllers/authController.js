const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { encrypt, decrypt } = require("../utils/crypto");
require("dotenv").config();

// Signup controller
const signup = async (req, res) => {
  try {
    const { username } = req.body;
    if (
      !username ||
      !username.username ||
      !username.email ||
      !username.password
    ) {
      return res.status(400).json({ message: "Invalid request format" });
    }

    const { username: rawUsername, email, password } = username;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const encryptedName = encrypt(rawUsername);
    const encryptedEmail = encrypt(email);

    const newUser = new User({
      username: encryptedName.content,
      email: encryptedEmail.content,
      iv_name: encryptedName.iv,
      iv_email: encryptedEmail.iv,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    console.log(error);
  }
};

// Login controller
const login = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Invalid request format" });
    }

    const { email: userEmail, password } = email;
    const users = await User.find({});
    let matchedUser = null;

    for (let user of users) {
      if (!user.iv_email || !user.email) continue;

      let decryptedEmail;
      try {
        decryptedEmail = decrypt({ iv: user.iv_email, content: user.email });
      } catch (err) {
        continue;
      }

      if (decryptedEmail === userEmail) {
        matchedUser = user;
        break;
      }
    }

    if (!matchedUser) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, matchedUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ _id: matchedUser._id }, process.env.JWT, {
      expiresIn: "1h",
    });

    const decryptedName = decrypt({
      iv: matchedUser.iv_name,
      content: matchedUser.username,
    });

    res.status(200).json({
      token,
      user: {
        id: matchedUser._id,
        username: decryptedName,
        email: userEmail,
      },
    });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Logout controller
const logout = (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { signup, login, logout };
