const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const selectedCandidateSchema = new Schema(
  {
    designation: { type: String, required: true },
    jobPostID: {type: mongoose.Schema.Types.ObjectId, ref: "company", required: true},
    selectedCandidates: [{type: mongoose.Schema.Types.ObjectId, ref: "candidate", required: true}]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SelectedCandidate = mongoose.model("selectedCandidate", selectedCandidateSchema);

module.exports = SelectedCandidate;
