const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const candidateSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    experience: { type: Number, required: true },
    profile: { type: String, required: true },
    currentCTC: { type: Number, required: true },
    expectedCTC: { type: Number, required: true },
    skills: [{ type: String, required: true }],
    resumeLink: { type: String, required: true },
    applyTime: { type: Date, default: Date.now, required: true },
    canStartNow: { type: Boolean, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Candidate = mongoose.model("candidate", candidateSchema);

module.exports = Candidate;
