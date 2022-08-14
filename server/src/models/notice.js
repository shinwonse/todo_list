const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  text: {
    type: String,
    required: true,
  },
});

const Notice = mongoose.model('Notice', NoticeSchema);

module.exports = { Notice };
