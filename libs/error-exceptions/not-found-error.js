class NotFoundError extends Error {
  constructor(message, status) {
    super(message);
    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name;
    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);
    // You can use any additional properties you want.
    // `500` is the default value if not specified.
    this.status = status || 404;
    this.responseMessage = "The requested resource was not found.";
  }
}

export default NotFoundError;
