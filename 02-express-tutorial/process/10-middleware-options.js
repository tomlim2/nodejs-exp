const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger.js');
const authorize = require('./authorize');

// app.use(logger);
// apply to all

// app.use('/api', logger);
// apply to /api
// api/home/product/items

// app.use([authorize, logger]);

// 1. use vs route
// 2. option - our own / express / thrid party(npm morgan)

app.use(morgan('tiny'));
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('products');
});

// app.get('/api/items', [authorize, logger], (req, res) => {
//   console.log(req.user);
//   res.send('items');
// });

app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('items');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000...');
});
