const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort('-name price');
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { name: { $regex: name, $option: 'i' } };
  }
  // console.log(queryObject);
  let result = Product.find(queryObject);
  // sort
  if(sort){
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
    console.log(result);
  } else{
    result = result.sort('createAt')
  }
  const products = await result

  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
