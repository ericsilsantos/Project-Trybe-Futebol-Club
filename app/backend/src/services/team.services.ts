import Teams from '../database/models/Team.model';

// interface ITeamService {
//   getAll(): Promise<Teams[]>
// }

class TeamService {
  // private teamModel = Teams;
  // constructor() {
  //   this.teamModel = Teams;
  // }

  static async getAll(): Promise<Teams[]> {
    console.warn('aaaaaaa');
    const result = await Teams.findAll();
    return result;
  }
}

export default TeamService;
