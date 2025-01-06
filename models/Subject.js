const SubjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    standard: { type: mongoose.Schema.Types.ObjectId, ref: 'Standard' },
  });
  
  module.exports = mongoose.model('Subject', SubjectSchema);