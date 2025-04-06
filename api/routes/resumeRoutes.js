const express = require("express");
const upload = require("../utils/multer");
const resumeController = require("../controllers/resumeController");
const { verifyToken } = require("../middleware/auth");

const router = express.Router();

router.post(
  "/",
  verifyToken,
  upload.single("file"),
  resumeController.createResume
);
router.get("/", verifyToken, resumeController.getAllResumes);
router.get("/:id", verifyToken, resumeController.getResume);
router.put(
  "/:id",
  verifyToken,
  upload.single("file"),
  resumeController.updateResume
);
router.delete("/:id", verifyToken, resumeController.deleteResume);

module.exports = router;
