const sequelize = require('../config/connection');
const seedPlatform = require('./platform-seed');
const seedMode = require('./mode-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPlatform();

  await seedMode();

  process.exit(0);
};

seedAll();