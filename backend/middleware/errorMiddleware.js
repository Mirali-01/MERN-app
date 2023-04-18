// Default Error Handler
// *Status code 500 = Internal Server Error, couldn't fulfill request
// 400 = bad, 200 = ok, 201 = ok & created resource
const defErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    // stack gives lines
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  defErrorHandler,
};
