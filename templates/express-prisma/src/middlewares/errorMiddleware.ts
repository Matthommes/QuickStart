import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";
import { CustomError } from "../utils/customError";

export const errorMiddleware = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err);
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
      details: err.details,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
};
