const resume = require("../models/resume");

const cloudinary = require("../utils/cloudinary");

//Upload resume controller
export const uploadResume = async (req, res) => {
  try {
    const file = req.file;

    const uploadResult = await cloudinary.uploader.upload(file.path, {
      folder: "resumes",
    });

    const newResume = new resume({
      userId: req.user._id,
      fileInfo: {
        cloudinaryUrl: uploadResult.secure_url,
        publicId: uploadResult.public_id,
        fileName: file.originalname,
        fileType: file.mimetype,
      },
    });

    await newResume.save();
    res
      .status(201)
      .json({ message: "Resume uploaded successfully", resume: newResume });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    console.log(error);
  }
};

//Get all resumes controller
export const getAllResumes = async (req, res) => {
  try {
    const resumes = await resume.find({ userId: req.user._id });
    if (!resumes || resumes.length === 0) {
      return res.status(404).json({ message: "No resumes found" });
    }
    res.status(200).json({ resumes });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

//Get resume by Id controller
export const getResumeById = async (req, res) => {
  try {
    const resumeId = req.params.resumeId;

    const resumeData = await resume.findById({
      _id: resumeId,
      userId: req.user._id,
    });

    if (!resumeData) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.status(200).json({ resumeData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

//Delete resume controller
export const deleteResume = async (req, res) => {
  const resumeId = req.params.resumeId;
  try {
    const resumeData = await resume.findByIdAndDelete({
      _id: resumeId,
      userId: req.user._id,
    });

    if (!resumeData) {
      return res.status(404).json({ message: "Resume not found" });
    }

    return res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

//Update resume controller
export const updateResume = async (req, res) => {
  try {
    const resumeId = req.params.resumeId;
    const file = req.file;

    //Update the existing resume in the database
    const existingResume = await resume.findOne({
      _id: resumeId,
      userId: req.user._id,
    });
    if (!existingResume) {
      return res
        .status(404)
        .json({ message: "Resume not found or unauthorized attempt" });
    }

    // Delete the old file from Cloudinary
    if (existingResume.fileInfo && existingResume.fileInfo.publicId) {
      await cloudinary.uploader.destroy(existingResume.fileInfo.publicId);
    }

    // Upload the new file to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(file.path, {
      folder: "resumes",
    });
  } catch (error) {}
};
