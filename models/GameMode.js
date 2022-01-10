const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class GameMode extends Model {}

GameMode.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'game',
        key: 'id'
      }
    },
    mode_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'mode',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'game_mode',
  }
);

module.exports = GameMode;