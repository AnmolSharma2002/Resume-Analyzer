const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

const JWT = process.env.JWT_SECRET_KEY;
