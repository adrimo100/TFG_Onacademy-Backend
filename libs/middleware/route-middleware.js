//Express error handler middleware
const errorHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (e) {
      res.status(e.status || 500).send(e.responseMessage || "Server error");
    }
  };
};

export default errorHandler;
