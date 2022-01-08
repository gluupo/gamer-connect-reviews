const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    platform_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'platform',
        key: 'id'
      },
    },
    release_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1,1000],
      },
    },
    game_modes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mode',
        key: 'id',
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