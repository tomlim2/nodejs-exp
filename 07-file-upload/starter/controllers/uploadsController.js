const path = require("path");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const cloudinary = require("cloudinary").v2;
const fs = require('fs')

const uploadProductImageLocal = async (req, res) => {
  // check if file exists
  // check format
  // check size
  if (!req.files) {
    throw new CustomError.BadRequestError("No File Uploaded");
  }
  console.log(req.files);
  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please Upload Image");
  }

  const maxSize = 1024 * 1024;

  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError("Please Upload Image smaller");
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );
  console.log(req.files);

  await productImage.mv(imagePath);

  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

const uploadProductImage = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    { use_filename: true, folder: "file-upload" }
  );
  console.log(result);
  fs.unlinkSync(req.files.image.tempFilePath)
  return res.status(StatusCodes.OK).json({src:result.secure_url})
};

module.exports = {
  uploadProductImage,
};
