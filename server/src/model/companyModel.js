const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    skill: [{ type: String, required: true }],
    location: { type: String, required: true },
    experience: { type: Number, required: true },
    package: { type: Number, required: true },
    designation: { type: String, required: true },
    department: { type: String, required: true },
    lastDate: { type: Date, required: true },
    workType: [{ type: String, required: true }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Company = mongoose.model("company", companySchema);

module.exports = Company;
