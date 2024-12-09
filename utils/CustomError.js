class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    (this.statusCode = statusCode), (this.message = message);
    this.isOperational = true;
  }
}

module.exports = CustomError;
