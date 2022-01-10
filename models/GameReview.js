const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class GameReview extends Model {}

GameReview.init(
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
    review_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'review',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'game_review',
  }
);

module.exports = GameReview;