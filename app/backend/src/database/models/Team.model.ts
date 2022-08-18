import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Teams extends Model {
  id: number;
  teamName: string;
}

Teams.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    type: STRING,
    field: 'team_name',
  },
}, {
  // underscored: true,
  sequelize: db,
  modelName: 'Team',
  timestamps: false,
});

export default Teams;
