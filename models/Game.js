const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model { }

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cover_id: {
      type: DataTypes.STRING,
    },
    release_date: {
      type: DataTypes.INTEGER
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 1000],
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'game',
  }
);

module.exports = Game;