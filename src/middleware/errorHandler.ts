import { NextFunction, Request, Response } from 'express';

import { ResponseError } from '../utils/interfaces';

export const errorHandler = async (
  error: ResponseError,
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  if (!error.statusCode) {
    error.statusCode = 500;
  }
  res.status(error.statusCode).send(error.message);
};
