const Game = require('./Game');
const GameMode = require('./GameMode');
const GamePlatform = require('./GamePlatform');
const GameReview = require('./GameReview');
const UserReview = require('./GameReview');
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

Mode.belongsToMany(Game, {
  through: GameMode,
  foreignKey: 'mode_id'
})

Game.belongsToMany(Platform, {
  through: GamePlatform,
  foreignKey: 'game_id'
});

Platform.belongsToMany(Game, {
  through: GamePlatform,
  foreignKey: 'platform_id'
})

Game.hasMany(Review, {
  foreignKey: 'game_id'
});

Review.belongsTo(Game, {
  foreignKey: 'game_id'
})

User.hasMany(Review, {
  foreignKey: 'user_id'
})

module.exports = {
  Game,
  GameMode,
  GamePlatform,
  GameReview,
  Mode,
  Platform,
  Review,
  User,
  UserReview
};