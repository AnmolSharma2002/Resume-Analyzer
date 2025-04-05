const express = require("express");
const router = express.Router();
const resumeController = require("../controllers/resumeController");
const verifyJWT = require("../middleware/auth");

router.get("/", verifyJWT.verifyToken, resumeController.getAllResumes); // Get all resumes
router.post("/", verifyJWT.verifyToken, resumeController.uploadResume); // Upload a new resume
router.get("/:resumeId", verifyJWT.verifyToken, resumeController.getResumeById); // Get a specific resume by ID
router.delete(
  "/:resumeId",
  verifyJWT.verifyToken,
  resumeController.deleteResume
); // Delete a specific resume by ID
router.patch(
  "/:resumeId",
  verifyJWT.verifyToken,
  resumeController.updateResume
); // Update a specific resume by ID
