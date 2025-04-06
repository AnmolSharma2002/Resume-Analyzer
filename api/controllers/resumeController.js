const Resume = require("../models/resume");
const cloudinary = require("../utils/cloudinary");
const streamifier = require("streamifier");

module.exports.createResume = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    // To stream the buffer file because Cloudinary does not accept buffer files directly
    //Streamifer is a library that allows you to create a readable stream from a buffer
    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: "raw", // for PDFs, DOCs etc.
            folder: "resumes",
          },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(file.buffer).pipe(stream);
      });
    };

    const result = await streamUpload();

    const newResume = new Resume({
      userId: req.user._id,
      fileInfo: {
        cloudinaryUrl: result.secure_url,
        publicId: result.public_id,
        fileName: file.originalname,
        fileType: file.mimetype,
      },
    });

    await newResume.save();
    res.status(201).json(newResume);
  } catch (error) {
    console.error("Upload error:", error);
    res
      .status(500)
      .json({ error: "Failed to upload resume", details: error.message });
  }
};

//Get All Resumes
module.exports.getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch resumes" });
  }
};

//Get Resume by ID
module.exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!resume) return res.status(404).json({ error: "Resume not found" });

    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ error: "Error fetching resume" });
  }
};

//Delete Resume
module.exports.deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!resume) return res.status(404).json({ error: "Resume not found" });

    await cloudinary.uploader.destroy(resume.fileInfo.publicId, {
      resource_type: "raw",
    });

    await Resume.deleteOne({ _id: resume._id });
    res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete resume" });
  }
};

//Update Resume
module.exports.updateResume = async (req, res) => {
  try {
    const existing = await Resume.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!existing) {
      return res.status(404).json({ error: "Resume not found" });
    }

    let updatedFileInfo = existing.fileInfo;

    // If a new file is uploaded
    if (req.file) {
      // Delete old resume from Cloudinary
      await cloudinary.uploader.destroy(existing.fileInfo.publicId, {
        resource_type: "raw",
      });

      // Upload new file to Cloudinary
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: "raw",
            folder: "resumes",
          },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

      updatedFileInfo = {
        cloudinaryUrl: result.secure_url,
        publicId: result.public_id,
        fileName: req.file.originalname,
        fileType: req.file.mimetype,
      };
    }

    // Update the document
    const updated = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      {
        $set: {
          ...req.body,
          fileInfo: updatedFileInfo,
        },
      },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    console.error("Update error:", error);
    res
      .status(500)
      .json({ error: "Failed to update resume", details: error.message });
  }
};
