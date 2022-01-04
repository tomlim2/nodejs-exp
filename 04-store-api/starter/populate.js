require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProduct = require('./products.json')


const start = async () => {
  try{
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany();
    await Product.create(jsonProduct) 
    console.log('Success');
  }catch(error){
    console.log(error);
  }
}

start()