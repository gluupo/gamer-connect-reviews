const getAllReviews = async () => {

}

const getReviewById = async () => {

}

const createReview = async (req, res) => {
  try {
    const dbReviewData = await Review.create({
      username: req.body.username,
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