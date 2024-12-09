const CustomError = require("../utils/customError");

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "something went wrong";

  console.log(err);

  // check if the error is operational
  if (err.isOperational) {
    return res.status(statusCode).json({
      message: message,
    });
  }

  // for programming errors

  return res.status(500).json({
    message: `internal server error`,
  });
};



module.exports = errorHandler;