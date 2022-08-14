const { Notice } = require('../models/notice');

exports.createNotice = (req, res) => {
  const notice = new Notice({
    text: req.body.text,
  });

  notice.save((err, notice) => {
    if (err) {
      res.send(err);
    }
    res.json(notice);
  });
};

exports.deleteNotice = (req, res) => {
  Notice.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: 'Notice Deleted' }))
    .catch((err) => res.send(err));
};

exports.editNotice = (req, res) => {
  Notice.findOneAndUpdate(
    { _id: req.params.noticeID },
    { $set: { date: Date, text: req.body.text } },
    { new: true },
    (err, Notice) => {
      if (err) {
        res.send(err);
      } else res.json(Notice);
    }
  );
};
