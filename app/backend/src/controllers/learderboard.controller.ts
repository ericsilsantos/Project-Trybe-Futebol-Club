import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.services';

class LeaderboardController {
  static async getAll(_req: Request, res: Response) {
    const leaderboard = await LeaderboardService.getAll();
    res.status(200).json(leaderboard);
  }
}

export default LeaderboardController;
