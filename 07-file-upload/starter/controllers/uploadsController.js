const path = require("path");

const { StatusCodes } = require("http-status-codes");

const uploadProductImage = async (req, res) => {
  const productImage = req.files.image;

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );
  console.log(req.files);

  await productImage.mv(imagePath);

  return res.status(StatusCodes.OK).json({image:{src: `/uploads/${productImage.name}`}})
};

module.exports = {
  uploadProductImage,
};
