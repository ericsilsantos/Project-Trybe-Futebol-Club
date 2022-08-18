import { Model, INTEGER } from 'sequelize';
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
      model: 'teams',
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
      model: 'teams',
      key: 'id',
    },
  },
  awayTeamGoals: {
    type: INTEGER,
    // field: 'away_team_goals',
  },
  inProgress: {
    type: INTEGER,
    // field: 'in_progress',
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Matche',
  timestamps: false,
});

Team.belongsTo(Matche, { foreignKey: 'id', as: 'homeTeam' });
Team.belongsTo(Matche, { foreignKey: 'id', as: 'awayTeam' });

Matche.hasMany(Team, { foreignKey: 'id', as: 'homeTeam' });
Matche.hasMany(Team, { foreignKey: 'id', as: 'awayTeam' });

export default Matche;
