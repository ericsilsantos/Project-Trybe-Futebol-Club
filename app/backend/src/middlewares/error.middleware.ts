import { ErrorRequestHandler } from 'express';

// class Error {
//   static error(err: ErrorRequestHandler, _req: Request, res: Response, _next: NextFunction) {
// const { message, code } = err;
//     res.status(code).json({ message });
//   }
// }

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { message } = err;
  res.status(400).json({ message });
};

export default errorMiddleware;
