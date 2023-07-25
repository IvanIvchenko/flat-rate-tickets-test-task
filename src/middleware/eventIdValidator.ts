import { NextFunction, Request, Response } from 'express';

import { RequestParams, ResponseError } from '../utils/interfaces';
import { isPositiveInteger } from '../utils/isPositiveInteger';

export const eventIdValidator = async (
  req: Request<RequestParams>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    if (req.params.id && !isPositiveInteger(req.params.id)) {
      const err: ResponseError = new Error('ID is invalid');
      err.statusCode = 400;
      throw err;
    }
    next();
  } catch (error) {
    next(error);
  }
};
