import Teams from '../database/models/Team.model';

// interface ITeamService {
//   getAll(): Promise<Teams[]>
// }

class TeamService {
  // private teamModel = Teams;
  // constructor() {
  //   this.teamModel = Teams;
  // }

  static async getAll() {
    const result = await Teams.findAll();
    return result;
  }

  static async getById(id: number) {
    const result = await Teams.findByPk(id);
    return result;
  }
}

export default TeamService;
