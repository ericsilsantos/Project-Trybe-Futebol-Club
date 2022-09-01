import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import throwTokenInvalid from './utils';

const secret = process.env.JWT_SECRET || '';

const verifyToken = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization || '';
  // if (!token) throwTokenNotFound('Token not found');
  try {
    jwt.verify(token, secret);
    next();
  } catch (error) {
    throwTokenInvalid('Token must be a valid token');
  }
};

export default verifyToken;
