const { Game } = require('../models');

const gameData = [
  {
    "id": 83742,
    "cover": {
      "id": 62823,
      "image_id": "ayip6gwogzvxxjy7yt8l"
    },
    "name": "Forza Motorsport 7 and Forza Horizon 3 Bundle",
    platform_id: [
      {
        "id": 49,
        "name": "Xbox One"
      }
    ],
    "release_dates": [
      {
        "id": 147031,
        "date": 1514764800
      }
    ],
    "summary": "Get two incredible games for one low price! Whether it’s on the track or off the beaten path, get your fix with two of the best-rated racing games ever made. This bundle includes the award-winning Forza Motorsport 7 and Forza Horizon 3 games for both Xbox One and Windows 10 PCs.\n\nFORZA MOTORSPORT 7\nExperience the thrill of motorsport at the limit with the most comprehensive, beautiful and authentic racing game ever made. Enjoy gorgeous graphics at 60fps and native 4K resolution in HDR. Collect and race more than 700 cars across 30 destinations, where race conditions change every time you return to the track.\n\nFORZA HORIZON 3\nYou’re in charge of the Horizon Festival. Customize everything, hire and fire your friends, and explore Australia in over 350 of the world’s greatest cars. Make your Horizon the ultimate celebration of cars, music, and freedom of the open road. How you get there is up to you."
  },
  {
    "id": 3072,
    "cover": {
      "id": 152873,
      "image_id": "co39yh"
    },
    mode_id: [
      {
        "id": 1,
        "name": "Single player"
      },
      {
        "id": 2,
        "name": "Multiplayer"
      },
      {
        "id": 4,
        "name": "Split screen"
      }
    ],
    "name": "Forza Motorsport 2",
    platform_id: [
      {
        "id": 12,
        "name": "Xbox 360"
      }
    ],
    "release_dates": [
      {
        "id": 6766,
        "date": 1179878400
      }
    ],
    "summary": "Forza Motorsport 2 brings Microsoft's racing sim series to the Xbox 360 with new tracks, new cars, and an impressive livery editor."
  },
  {
    "id": 137632,
    "cover": {
      "id": 186388,
      "image_id": "co3ztg"
    },
    mode_id: [
      {
        "id": 1,
        "name": "Single player"
      }
    ],
    "name": "Forza Polpo",
    platform_id: [
      {
        "id": 6,
        "name": "PC (Microsoft Windows)"
      }
    ],
    "release_dates": [
      {
        "id": 326117,
        "date": 1637712000
      }
    ],
    "summary": "It is the year 199X, and the world has been destroyed like it's an anime. Use your brave tiny Octopus robot to traverse a Japan frozen in time and place to defeat the evil Dr. Prometheus in this 90's-inspired and 2020-made action game full of neon, lasers, and tiny robots."
  },
  {
    "id": 102867,
    "cover": {
      "id": 116303,
      "image_id": "co2hqn"
    },
    mode_id: [
      {
        "id": 1,
        "name": "Single player"
      }
    ],
    "name": "Forza Street",
    platform_id: [
      {
        "id": 6,
        "name": "PC (Microsoft Windows)"
      },
      {
        "id": 34,
        "name": "Android"
      },
      {
        "id": 39,
        "name": "iOS"
      }
    ],
    "release_dates": [
      {
        "id": 168261,
        "date": 1527465600
      },
      {
        "id": 192706,
        "date": 1588636800
      },
      {
        "id": 192707,
        "date": 1588636800
      }
    ],
    "summary": "Enter the ultimate street racing scene to win the car collection of your dreams. Pick an event, set your lineup, and race for infamy. \n \nCOLLECT AND UPGRADE ICONIC CARS \nRace to collect legendary cars – from classic muscle to modern sports and retro supercars – turning your garage into a trophy case. \n \nTRUE CINEMATIC RACING \nStreamlined controls focus on timing for gas, brake, and boost as action-cams chase the adrenaline up close. \n \nRACE ON YOUR TERMS \nRace anytime, anywhere. Squeeze in a quick one-minute race or get immersed in an endless story with multiple paths to victory."
  },
  {
    "id": 78511,
    "cover": {
      "id": 112112,
      "image_id": "co2ei8"
    },
    mode_id: [
      {
        "id": 1,
        "name": "Single player"
      },
      {
        "id": 2,
        "name": "Multiplayer"
      }
    ],
    "name": "Forza Motorsport",
    platform_id: [
      {
        "id": 6,
        "name": "PC (Microsoft Windows)"
      },
      {
        "id": 169,
        "name": "Xbox Series X|S"
      }
    ],
    "release_dates": [
      {
        "id": 291919
      },
      {
        "id": 291920
      }
    ],
    "summary": "The 8th entry in the Forza Motorsport series."
  },
];

const seedGame = () => Game.bulkCreate(gameData);

module.exports = seedGame;