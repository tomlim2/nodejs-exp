const express = require('express');
const app = express();
const logger = require('./logger.js');
const authorize = require('./authorize');

// app.use(logger);
// apply to all

// app.use('/api', logger);
// apply to /api
// api/home/product/items

// app.use([authorize, logger]);

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('products');
});

app.get('/api/items', [authorize, logger], (req, res) => {
  console.log(req.user);
  res.send('items');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000...');
});
