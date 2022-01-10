const getAllReviews = async () => {

}

const getReviewById = async () => {

}

const createReview = async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
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