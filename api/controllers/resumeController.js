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
