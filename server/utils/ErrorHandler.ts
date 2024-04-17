class ErrorHandler extends Error {
  statusCode: Number;

  constructor(message: any, statusCode: Number) {
    super(message); // The super() method is used to call the constructor of the parent class (error in the case).
    // It passes the message prgument to the error calss contructor  which sets the error message for the instance.
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
