/**
 * Global error handler
 * Catches any errors forwarded through next(err) and returns structured JSON.
 */
const errorHandler = (err, req, res) => {
  console.error(err);

  res.status(err.status || 500).json({
    message: err.message || "Server Error",
  });
};

export default errorHandler;