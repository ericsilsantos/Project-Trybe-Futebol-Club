import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, _req, res, _next) => {
  const { message, name } = err;
  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message });
      break;
    case 'EmailOrPasswordIncorrect':
      res.status(401).json({ message });
      break;
    case 'TwoEqualTeams':
      res.status(401).json({ message });
      break;
    default:
      res.status(500).json({ message: 'Error não tratado' });
      break;
  }
};

export default errorMiddleware;
