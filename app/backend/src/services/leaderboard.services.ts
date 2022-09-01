import Match from '../database/models/Matche.model';
import Team from '../database/models/Team.model';

interface IPointsMatch {
  homeTeamGoals: number,
  awayTeamGoals: number,
  result: string,
}

interface IResultTeam {
  name: string
  totalPoints: number
  totalGames: number
  totalVictories: number
  totalDraws: number
  totalLosses: number
  goalsFavor: number
  goalsOwn: number
  goalsBalance: number
  efficiency: string
}

function verifyVitory(matches: Match[]) {
  const IPoints = matches.map((match) => {
    let result;
    if (match.homeTeamGoals > match.awayTeamGoals) {
      result = 'vitory';
    } else if (match.homeTeamGoals < match.awayTeamGoals) {
      result = 'loser';
    } else {
      result = 'draw';
    }
    return {
      homeTeamGoals: match.homeTeamGoals,
      awayTeamGoals: match.awayTeamGoals,
      result,
    };
  });
  return IPoints;
}

const totalGoals = (matches: IPointsMatch[]) => {
  let goalsFavor = 0;
  let goalsOwn = 0;
  matches.forEach((match) => {
    goalsFavor += match.homeTeamGoals;
    goalsOwn += match.awayTeamGoals;
  });
  return { goalsFavor, goalsOwn };
};

const totalResultMatch = (matches: IPointsMatch[]) => {
  let [totalVictories, totalDraws, totalLosses] = [0, 0, 0, 0];
  matches.forEach((match) => {
    switch (match.result) {
      case 'vitory':
        totalVictories += 1;
        break;
      case 'draw':
        totalDraws += 1;
        break;
      case 'loser':
        totalLosses += 1;
        break;
      default:
        return null;
    }
  });
  return { totalVictories, totalDraws, totalLosses };
};

const sumMatches = (matches: IPointsMatch[]) => {
  const resultMatchesByTeam = totalResultMatch(matches);
  const totalPoints = resultMatchesByTeam.totalVictories * 3 + resultMatchesByTeam.totalDraws;
  const totalGames = matches.length;
  const efficiency = ((totalPoints / (totalGames * 3)) * 100).toFixed(2);
  return {
    ...resultMatchesByTeam, totalPoints, totalGames, efficiency,
  };
};

const orderTeams = (resultTeam: IResultTeam[]) => resultTeam.sort((team, otherTeam) => {
  if (otherTeam.totalPoints > team.totalPoints) return 1;
  if (otherTeam.totalPoints < team.totalPoints) return -1;
  if (otherTeam.totalVictories > team.totalVictories) return 1;
  if (otherTeam.totalVictories < team.totalVictories) return -1;
  if (otherTeam.goalsBalance > team.goalsBalance) return 1;
  if (otherTeam.goalsBalance < team.goalsBalance) return -1;
  if (otherTeam.goalsFavor > team.goalsFavor) return 1;
  if (otherTeam.goalsFavor < team.goalsFavor) return -1;
  if (otherTeam.goalsOwn > team.goalsOwn) return -1;
  if (otherTeam.goalsOwn < team.goalsOwn) return 1;
  return 0;
});

class LeaderboardService {
  static async getAll() {
    const teams = await Team.findAll();
    const resultAllFinishTeam = await Promise.all(
      teams.map(async (team) => {
        const matches = await Match.findAll({ where: { homeTeam: team.id, inProgress: false } });
        const resultMatches = verifyVitory(matches);
        const sumResult = sumMatches(resultMatches);
        const sumGoalsTeam = totalGoals(resultMatches);
        return {
          name: team.teamName,
          ...sumResult,
          ...sumGoalsTeam,
          goalsBalance: sumGoalsTeam.goalsFavor - sumGoalsTeam.goalsOwn,
        };
      }),
    );
    const leaderboard = orderTeams(resultAllFinishTeam);
    return leaderboard;
  }
}

export default LeaderboardService;
