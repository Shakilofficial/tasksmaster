/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import { TResponse } from '../types/response';

const sendResponse = <T>(
  res: Response,
  { statusCode, success, message = '', meta, data }: TResponse<T>,
) => {
  // Construct base response
  const response: Record<string, any> = {
    success,
    message,
  };

  // Include data if present
  if (data !== undefined && data !== null) {
    response.data = data;
  }

  // Include meta only if provided and relevant
  if (meta && Object.keys(meta).length > 0) {
    response.meta = meta;
  }

  // Send the response
  return res.status(statusCode).json(response);
};

export default sendResponse;
