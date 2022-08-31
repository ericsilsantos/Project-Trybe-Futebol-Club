import Team from '../database/models/Team.model';
import Matche from '../database/models/Matche.model';

class MatchService {
  static async getAll() {
    console.warn('aaaaaaaaaa');
    const result = await Matche.findAll({
      // include: { model: Team, as: 'teamHome' },
      include: [
        { model: Team, as: 'teamHome' },
        { model: Team, as: 'teamAway' },
      ],
    });
    return result;
  }
}

export default MatchService;
