const Game = require('./Game');
const Mode = require('./Mode');
const Platform = require('./Platform');
const Review = require('./Review');
const User = require('./User');

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Review.belongsTo(Game, {
  foreignKey: 'game-id'
});

User.hasMany(Review, {
  foreignKey: 'game_id'
});

Game.hasMany(Review, {
  foreignKey: 'review_id'
});

Game.hasMany(Mode, {
  foreignKey: 'game_modes'
});

Game.hasMany(Platform, {
  foreignKey: 'platform_id'
});

module.exports = {
  Game, 
  Mode, 
  Platform, 
  Review, 
  User
};