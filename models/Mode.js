const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mode extends Model {}

Mode.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    game_mode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timeStamps: true,
    freezeTableName: true,
    underscore: true,
    modelName: 'mode',
  },
);

module.exports = Mode;