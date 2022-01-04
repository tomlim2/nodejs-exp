const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes;
app.use('/api/v1/tasks', tasks);
app.use(express.json(notFound));
app.use(errorHandlerMiddleware);
// app.get('/hello', (req, res) => {
//   res.send('Task Manager App');
// });
// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/id:')
// app.patch('/api/v1/tasks/id:')
// app.delete('/api/v1/tasks/id:')

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
