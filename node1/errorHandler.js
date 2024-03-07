const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case 404:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 501:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
  }}
export default errorHandler;
