const StandardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    classCategory: { type: String },
  });
  
  module.exports = mongoose.model('Standard', StandardSchema);