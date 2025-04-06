const mongoose = require("mongoose");

// Subschema for file details (stored in Cloudinary)
const FileInfoSchema = new mongoose.Schema(
  {
    cloudinaryUrl: { type: String, required: true },
    publicId: { type: String, required: true },
    fileName: { type: String },
    fileType: { type: String },
  },
  { _id: false }
);

// Subschema for analysis details
const AnalysisSchema = new mongoose.Schema(
  {
    score: { type: Number },
    keywords: [{ type: String }],
    summary: { type: String },
    isBest: { type: Boolean, default: false },
    targetProfile: { type: String, required: true }, // e.g., 'Data Analyst'
    jobCategory: { type: String }, // Optional: e.g., 'Analytics'
    experienceLevel: {
      type: String,
      enum: ["Entry", "Mid", "Senior", "Lead"],
      default: "Entry",
    },
  },
  { _id: false }
);

// Final Resume Schema
const ResumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fileInfo: FileInfoSchema,
    analysis: AnalysisSchema,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", ResumeSchema);
