const mongoose = require('mongoose');
const { MONGO_ID, MONGO_PW } = require('../config/mongodb');

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
};

mongoose
  .connect(
    `mongodb+srv://${MONGO_ID}:${MONGO_PW}@todo-list.mc8pohc.mongodb.net/test`
  )
  .then(() => console.log(`✅ Connected to DB`))
  .catch((e) => console.log(`❌ Error on DB connection: ${e}`));

module.exports = connect;
