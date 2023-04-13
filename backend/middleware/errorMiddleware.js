// Default Error Handler
// *Status code 500 = Internal Server Error, couldn't fulfill request
// 400 = bad, 200 = ok
const defErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    // stack gives lines
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

const mongoErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    // stack gives lines
    stack: process.env.MONGO_URI === MONGO_URI ? null : err.stack,
  });
  console.log(err);
  // success = 0 & terminate = 1
  process.exit(1);
};

module.exports = {
  defErrorHandler,
  mongoErrorHandler,
};
