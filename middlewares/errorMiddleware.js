const errorHandler = (err, req, res, next) => {
  // Ensure err is defined
  if (!err) {
    return res.status(500).json({
      status: "error",
      message: "Unknown error occurred",
    });
  }

  const statusCode = err.statusCode || 500;
  const message = err.isOperational
    ? err.message
    : "Something went wrong. Please try again later.";

  // Log the error stack in non-production environments for debugging
  if (process.env.NODE_ENV !== "production") {
    console.error(err.stack);
  }

  return res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

module.exports = errorHandler;
