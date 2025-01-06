const mongoose = require('mongoose');

const InstituteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['Playhouse', 'School', 'College', 'Competitive Exam Center'], required: true },
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
  medium: { type: String },
  classCategory: { type: String },
  standards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Standard' }],
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
  university: { type: String },
  degreeType: { type: String },
  exams: { type: [String] },
});

module.exports = mongoose.model('Institute', InstituteSchema);