import { Router } from 'express';
import TeamController from '../controllers/team.controller';

const teamRouter = Router();
// const teamController = new TeamController();

teamRouter.get('/', TeamController.getAll);
teamRouter.get('/:id', TeamController.getById);

export default teamRouter;
