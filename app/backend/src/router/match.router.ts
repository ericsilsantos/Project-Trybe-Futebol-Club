import { Router } from 'express';
import MatchController from '../controllers/match.controller';

const matchRouter = Router();

matchRouter.get('/', MatchController.getAll);

export default matchRouter;
