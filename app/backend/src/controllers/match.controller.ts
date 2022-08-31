import { Request, Response } from 'express';
import MatchService from '../services/match.service';

class MatchController {
  static async getAll(_req: Request, res: Response) {
    const matches = await MatchService.getAll();
    res.status(200).json(matches);
  }

  static async create(req: Request, res: Response) {
    const match = req.body;
    const matchCreated = await MatchService.create(match);
    res.status(201).json(matchCreated);
  }
}

export default MatchController;
