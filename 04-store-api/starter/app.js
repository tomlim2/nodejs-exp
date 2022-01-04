require('dotenv').config();
// async error
const express = require('express');
const app = express();

const connectDB = require('./db/connect')

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json());

//rootes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a herf="/api/v1/products">products route</a>');
});

//product route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start()