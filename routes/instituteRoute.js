const express = require('express');
const router = express.Router();
const instituteController = require('/controllers/instituteController');

router.post('/institute', instituteController.createInstitute);
router.get('/boards', instituteController.getBoards);
router.get('/standards/:classCategory', instituteController.getStandardsByClassCategory);
router.get('/subjects/:standardId', instituteController.getSubjectsByStandard);

module.exports = router;