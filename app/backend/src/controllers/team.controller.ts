import { Request, Response } from 'express';
import TeamService from '../services/team.services';

// interface ITeamControler {
//   getAll(): void
// }

class TeamController {
  // private teamService = TeamService;
  // constructor() {
  //   this.teamService = new TeamService();
  // }

  static async getAll(_req: Request, res: Response) {
    const teams = await TeamService.getAll();
    res.status(200).json(teams);
  }

  static async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const team = await TeamService.getById(id);
    res.status(200).json(team);
  }
}

export default TeamController;
