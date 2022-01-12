const { Review } = require('../../models')

const getAllReviews = async () => {

}

const getReviewById = async () => {

}

const createReview = async (req, res) => {
  try {
    console.log(req.body)
    const dbReviewData = await Review.create({
      user_id: req.body.user_id,
      game_id: req.body.game_id,
      rating: req.body.rating,
      review: req.body.review,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbReviewData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

const updateReview = async () => {

}

const deleteReview = async () => {

}

module.exports = { getAllReviews, getReviewById, createReview, updateReview, deleteReview }