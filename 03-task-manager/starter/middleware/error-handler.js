const { CustomAPIError } = require('../error/custom-error');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.status).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: 'Something went wrong, please try again' });
};
// something went wrong, try again later
module.exports = errorHandlerMiddleware;
