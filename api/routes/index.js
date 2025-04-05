const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const userRoutes = require("./user");
const resumeRoutes = require("./resumeRoutes");

router.use("/auth", authRoutes); // Authentication Routes
router.use("/user", userRoutes); //User Routes
router.use("/resume", resumeRoutes); //Resume routes

module.exports = router;
