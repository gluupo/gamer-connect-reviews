const { Game } = require('../models');

const gameData = [
  {
    "id": 83742,
    "cover_id": "ayip6gwogzvxxjy7yt8l",
    "name": "Forza Motorsport 7 and Forza Horizon 3 Bundle",
    "platform_id": 49,
    "release_date": 1514764800,
    "summary": " you."
  },
]

const seedGame = () => Game.bulkCreate(gameData);

module.exports = seedGame;