const { Review } = require('../models');

const reviewData = [
  {
    id: 1,
    review: "This game is awesome",
    user_id: 1,
    game_id: 83742
  },
  {
    id: 2,
    review: "This is a fun game!",
    user_id: 2,
    game_id: 3072
  },
  {
    id: 3,
    review: "This game could use some work.",
    user_id: 1,
    game_id: 3072
  },
  {
    id: 4,
    review: "I wish this game was multiplayer",
    user_id: 3,
    game_id: 137632
  },
  {
    id: 5,
    review: "I really enjoyed this game.",
    user_id: 4,
    game_id: 137632
  },
  {
    id: 6,
    review: "I like that this game is only single player.",
    user_id: 5,
    game_id: 102867
  }
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;