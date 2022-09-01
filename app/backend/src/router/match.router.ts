import { Router } from 'express';
import verifyToken from '../middlewares/verifyToken';
import MatchController from '../controllers/match.controller';

const matchRouter = Router();

matchRouter.get('/', MatchController.getAll);
matchRouter.post('/', verifyToken, MatchController.create);
matchRouter.patch('/:id', MatchController.atualizar);
matchRouter.patch('/:id/finish', MatchController.finish);

export default matchRouter;
