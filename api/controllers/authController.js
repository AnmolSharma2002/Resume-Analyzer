const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { encrypt, decrypt } = require("../utils/crypto");
require("dotenv").config();

// Signup
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ lookupEmail: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const encryptedName = encrypt(username);
    const encryptedEmail = encrypt(email);
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: encryptedName.content,
      iv_name: encryptedName.iv,
      email: encryptedEmail.content,
      iv_email: encryptedEmail.iv,
      lookupEmail: email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ lookupEmail: email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT, {
      expiresIn: "1h",
    });

    const decryptedName = decrypt({
      iv: user.iv_name,
      content: user.username,
    });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: decryptedName,
        email: user.lookupEmail,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

const logout = (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { signup, login, logout };
