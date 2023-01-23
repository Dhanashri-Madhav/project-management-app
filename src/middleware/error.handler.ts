import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { ClientError, ServerError, InputValidationError } from "../lib/error";


export const errorClassifier = (err: Error) => {
    const defaultErrorMessage = "Internal server error";
    const error =
      err instanceof Error ? err : new Error(String(err || defaultErrorMessage));
    error.message = err.message;
    switch (error.constructor) {
      case ClientError:
        return { message: err.message, statusCode: 400 };
      case ServerError:
        return { message: err.message, statusCode: 500 };
      case InputValidationError:
        return { message: err.message, statusCode: 400 };
      default:
        throw err;
    }
  };
  
  export const sendError: ErrorRequestHandler = (
    err,
    req: Request,
    res,
    next: NextFunction
  ) => {
    let errorOutput;
    try {
      errorOutput = errorClassifier(err);
    } catch (error) {
      return next(err);
    }
    const output = {
      error: errorOutput.message,
      statusCode: errorOutput.statusCode,
      status: "failure",
    };
    return res.status(errorOutput.statusCode).send(output);
  };
  