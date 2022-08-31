import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './Team.model';

class Matche extends Model {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: number;
}

Matche.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeam: {
    type: INTEGER,
    // field: 'home_team',
    references: {
      model: 'Team',
      key: 'id',
    },
  },
  homeTeamGoals: {
    type: INTEGER,
    // field: 'home_team_goals',
  },
  awayTeam: {
    type: INTEGER,
    // field: 'away_team',
    references: {
      model: 'Team',
      key: 'id',
    },
  },
  awayTeamGoals: {
    type: INTEGER,
    // field: 'away_team_goals',
  },
  inProgress: {
    type: BOOLEAN,
    defaultValue: true,
    // field: 'in_progress',
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Matche',
  timestamps: false,
});

Team.hasMany(Matche, { foreignKey: 'homeTeam', as: 'teamHome' });
Team.hasMany(Matche, { foreignKey: 'awayTeam', as: 'teamAway' });

Matche.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Matche.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Matche;
