const Institute = require('/models/Institute');
const Board = require('/models/Board');
const Standard = require('/models/Standard');
const Subject = require('/models/Subject');

// Create Institute
exports.createInstitute = async (req, res) => {
  try {
    const instituteData = req.body;
    const institute = new Institute(instituteData);
    await institute.save();
    res.status(201).json({ message: 'Institute created successfully', institute });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Boards
exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Standards by Class Category
exports.getStandardsByClassCategory = async (req, res) => {
  try {
    const { classCategory } = req.params;
    const standards = await Standard.find({ classCategory });
    res.status(200).json(standards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Subjects by Standard
exports.getSubjectsByStandard = async (req, res) => {
  try {
    const { standardId } = req.params;
    const subjects = await Subject.find({ standard: standardId });
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};