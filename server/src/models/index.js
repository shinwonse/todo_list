const mongoose = require('mongoose');

const connect = () => {
  if (process.env.NODE_ENV !== 'production'){
    mongoose.set('debug', true);
  }
}

mongoose.connect('mongodb+srv://wonse:1234@todo-list.mc8pohc.mongodb.net/test')
const mongoDB = mongoose.connection;

const handleOpen = () => {
  console.log(`✅ Connected to DB`);
}

const handleError = (error) => {
  console.log(`❌ Error on DB connection: ${error}`);
};

mongoDB.once("open", handleOpen);
mongoDB.on("error", handleError);

module.exports = connect;

