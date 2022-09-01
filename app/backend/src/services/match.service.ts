import Team from '../database/models/Team.model';
import Matche from '../database/models/Matche.model';
import { throwTeamNotExist } from '../controllers/utils';

interface IPlacar {
  homeTeamGoals: number,
  awayTeamGoals: number,
}

class MatchService {
  static async getAll() {
    console.warn('aaaaaaaaaa');
    const result = await Matche.findAll({
      include: [
        { model: Team, as: 'teamHome' },
        { model: Team, as: 'teamAway' },
      ],
    });
    return result;
  }

  static async create(match: Matche) {
    const result = await Matche.create(match);
    return result;
  }

  static async finish(idMatch: string) {
    const result = await Matche.update(
      { inProgress: false },
      { where: { id: idMatch } },
    );
    return result;
  }

  static async verifyExist(teamHome: number, teamAway: number) {
    const result1 = await Matche.findOne({ where: { id: teamHome } });
    const result2 = await Matche.findOne({ where: { id: teamAway } });
    if (result1 === null || result2 === null) {
      throwTeamNotExist('There is no team with such id!');
    }
  }

  static async atualizarPlacar(idMatch: string, placar: IPlacar) {
    await Matche.update({
      homeTeamGoals: placar.homeTeamGoals,
      awayTeamGoals: placar.awayTeamGoals,
    }, { where: { id: idMatch } });
  }
}

export default MatchService;
