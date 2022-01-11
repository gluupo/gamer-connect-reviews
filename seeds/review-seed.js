const { Review } = require('../models');

const reviewData = [
  {
    id: 1,
    review: "This game is awesome",
    user_id: 1,
    game_id: 83742
  }
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;