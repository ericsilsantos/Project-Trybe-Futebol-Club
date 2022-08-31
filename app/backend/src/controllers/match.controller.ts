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

  static async finish(req: Request, res: Response) {
    const idMatch = req.params.id;
    await MatchService.finish(idMatch);
    res.status(200).json({ message: 'Finished' });
  }
}

export default MatchController;
