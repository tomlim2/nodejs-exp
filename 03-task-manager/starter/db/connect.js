const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://yslim:9dnjfxhRl@nodeexpressproject.a6dqt.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority';

const connectDB = url => {
  return mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log('connected to the db...'))
    .catch(err => console.log(err));
};

module.exports = connectDB;
