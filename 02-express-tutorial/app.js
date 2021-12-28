const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
  const newProduct = products.map(product => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.get('/api/products/:productId', (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productId } = req.params;
  const singleProduct = products.find(
    product => product.id === Number(productId)
  );
  if (!singleProduct) {
    return res.status(404).send('Product does not exist');
  }
  console.log(singleProduct);
  res.json(singleProduct);
});

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
  console.log(req.params);
  res.send('Hello there');
});

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  console.log(req.query);
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter(product => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
  // res.send('world best');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000...');
});
