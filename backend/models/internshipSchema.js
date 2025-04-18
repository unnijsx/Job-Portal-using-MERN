const mongoose = require("mongoose");

const internshipSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  stipend: { type: Number },
  location: { type: String, required: true },
  company: { type: String, required: true },
  duration: { type: Number, required: true }, // in months
  status: { type: Boolean, default: true }
});

module.exports = mongoose.model("internship", internshipSchema);
