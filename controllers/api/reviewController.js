const { Review } = require('../../models')

const createReview = async (req, res) => {
  try {
    const checkRating = (rating) => {
      if (rating > 5) return 5;
      else if (rating < 1) return 1;
      else return rating;
    }
    console.log(req.body)
    const dbReviewData = await Review.create({
      user_id: req.body.user_id,
      game_id: req.body.game_id,
      rating: checkRating(req.body.rating),
      review: req.body.review,
    });
    req.session.save(() => {
      // req.session.loggedIn = true;
      res.status(200).json(dbReviewData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = { createReview }