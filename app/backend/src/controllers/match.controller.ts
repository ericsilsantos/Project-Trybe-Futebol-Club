import { Request, Response } from 'express';
import Matche from '../database/models/Matche.model';
import MatchService from '../services/match.service';
import { throwTwoEqualTeams } from './utils';

class MatchController {
  static async getAll(_req: Request, res: Response) {
    const matches = await MatchService.getAll();
    res.status(200).json(matches);
  }

  static async create(req: Request, res: Response) {
    const match: Matche = req.body;
    if (match.homeTeam === match.awayTeam) {
      throwTwoEqualTeams('It is not possible to create a match with two equal teams');
    }
    await MatchService.verifyExist(match.homeTeam, match.awayTeam);
    const matchCreated = await MatchService.create(match);
    res.status(201).json(matchCreated);
  }

  static async finish(req: Request, res: Response) {
    const idMatch = req.params.id;
    await MatchService.finish(idMatch);
    res.status(200).json({ message: 'Finished' });
  }

  static async atualizar(req: Request, res: Response) {
    const idMatch = req.params.id;
    await MatchService.atualizarPlacar(idMatch, req.body);
    res.status(200).json({ message: 'Updated' });
  }
}

export default MatchController;
