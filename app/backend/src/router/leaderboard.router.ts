import { Router } from 'express';
import LeaderboardController from '../controllers/learderboard.controller';

const leaderboardRouter = Router();

leaderboardRouter.get('/home', LeaderboardController.getAll);

export default leaderboardRouter;
