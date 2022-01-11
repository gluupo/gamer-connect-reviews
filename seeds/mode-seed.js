const { Mode } = require('../models');

const modeData = [
  {
    id: 1,
    game_mode: 'Single Player'
  },
  {
    id: 2,
    game_mode: 'Multiplayer'
  },
  {
    id: 3,
    game_mode: 'Co-operative'
  },
  {
    id: 4,
    game_mode: 'Split Screen'
  },
  {
    id: 5,
    game_mode: 'Massively Multiplayer Online (MMO)'
  },
  {
    id: 6,
    game_mode: 'Battle Royale'
  },
];

const seedMode = () => Mode.bulkCreate(modeData);

module.exports = seedMode;