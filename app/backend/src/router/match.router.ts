import { Router } from 'express';
import MatchController from '../controllers/match.controller';

const matchRouter = Router();

matchRouter.get('/', MatchController.getAll);
matchRouter.post('/', MatchController.create);
matchRouter.patch('/:id/finish', MatchController.finish);

export default matchRouter;
