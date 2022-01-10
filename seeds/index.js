const sequelize = require('../config/connection');
const seedUser = require('./user-seed');
const seedGame = require('./game-seed');
const seedPlatform = require('./platform-seed');
const seedMode = require('./mode-seed');
const seedReview = require('./review-seed');
const sequelize = require('sequelize');

const seedAll = async () => {
  await sequelize.sync({ force: true});

  await seedUser();

  await seedGame();

  await seedPlatform();

  await seedMode();

  await seedReview();

  process.exit(0);
};

seedAll();