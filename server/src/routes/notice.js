const express = require('express');
const router = express.Router();
const Notice = require('../controller/noticeController');

// Create Notice
router.post('/api/notice', Notice.createNotice);

// Delete Notice
router.delete('/api/notice/:noticeID', Notice.deleteNotice);

// Edit Notice
router.put('/api/notice/:noticeID', Notice.editNotice);

module.exports = router;
