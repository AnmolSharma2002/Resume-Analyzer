const mongoose = require("mongoose");

const FileInfoSchema = new mongoose.Schema(
  {
    cloudinaryUrl: { type: String, required: true },
    publicId: { type: String, required: true },
    fileName: { type: String },
    fileType: { type: String },
  },
  { _id: false }
);

const AnalysisSchema = new mongoose.Schema(
  {
    score: { type: Number },
    keywords: [{ type: String }],
    summary: { type: String },
    isBest: { type: Boolean, default: false },
    jobCategory: { type: String },
  },
  { _id: false }
);

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
