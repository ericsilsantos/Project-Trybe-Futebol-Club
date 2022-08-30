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

  static async getAll(_req: Request, res: Response):Promise<void> {
    console.warn('wwwwww');
    const teams = await TeamService.getAll();
    res.status(200).json(teams);
  }
}

export default TeamController;
