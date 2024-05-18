//Express error handler middleware
import jwt from "jsonwebtoken";
import ValidationError from "../error-exceptions/validation-error.js";

const errorRouteHandler = (fn, verifyToken = false) => {
  return async (req, res, next) => {
    try {
      if (verifyToken) {
        const token = req.headers.authorization?.split(" ")[1];

        console.log(req.headers.authorization);

        if (!token) {
          throw new ValidationError("Not authorized", 401);
        }

        const isTokenValid = jwt.verify(token, process.env.JWT_SECRET);

        if (!isTokenValid) {
          throw new ValidationError("Not authorized", 401);
        }
      }

      await fn(req, res, next);
    } catch (e) {
      console.log(e.message);
      res.status(e.status || 500).send(e.responseMessage || "Server error");
    }
  };
};

export default errorRouteHandler;
