const Game = require('./Game');
const GameMode = require('./GameMode');
const GamePlatform = require('./GamePlatform');
const GameReview = require('./GameReview');
const Mode = require('./Mode');
const Platform = require('./Platform');
const Review = require('./Review');
const User = require('./User');

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Game.belongsToMany(Mode, {
  through: GameMode,
  foreignKey: 'game_id'
});

Game.belongsToMany(Platform, {
  through: GamePlatform,
  foreignKey: 'game_id'
});

Game.belongsToMany(Review, {
  through: GameReview,
  foreignKey: 'game_id'
});

module.exports = {
  Game, 
  GameMode, 
  GamePlatform, 
  GameReview, 
  Mode, 
  Platform, 
  Review, 
  User
};