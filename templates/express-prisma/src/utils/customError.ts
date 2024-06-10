export class CustomError extends Error {
  statusCode: number;
  details?: string | object;

  constructor(
    message: string,
    statusCode: number = 500,
    details: string | object
  ) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
