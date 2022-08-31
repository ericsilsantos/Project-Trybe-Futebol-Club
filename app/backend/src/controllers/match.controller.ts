import { Request, Response } from 'express';
import MatchService from '../services/match.service';

class MatchController {
  static async getAll(_req: Request, res: Response) {
    const matches = await MatchService.getAll();
    res.status(200).json(matches);
  }
}

export default MatchController;
