const router = require('express').Router();
const { User, Review, Game } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

router.get('/', async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: [
        {
          model: User,
          attributes: [
            'id',
            'username'
          ]
        }, {
          model: Game,
          attributes: [
            'id',
            'cover_id',
            'name'
          ]
        }
      ]
      // order: [['createdAt', DESC]]
    })
    const reviews = reviewData.map((project) => project.get({ plain: true }));
    res.render('reviews', { reviews })
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
