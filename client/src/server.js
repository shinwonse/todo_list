const express = require('express');
const app = express();

app.use('/src', express.static('/'));

app.get('/*', (req, res) => {
  res.sendFile('index.html');
  // res.sendFile(__dirname + '/' + 'index.html');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening!');
});
