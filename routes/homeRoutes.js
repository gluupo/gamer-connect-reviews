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
      ],
      order: [['created_at', 'DESC']],
      limit: 5
    })
    const reviews = reviewData.map((project) => project.get({ plain: true }));
    res.render('reviews', { reviews })
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/game/:id', async (req, res) => {
  try {
    const gameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: Review,
          attributes: [
            'id',
            'review',
          ],
          include: [
            {
              model: User,
              attributes: [
                'id',
                'username'
              ]
            }
          ],
          order: [['created_at', 'DESC']],
          limit: 5
        }
      ]
    })
    const game = gameData.get({ plain: true });
    res.render('game', { game })
  } catch (err) {
    res.status(500).json(err);
  }
})


router.get('/user/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Review,
          attributes: [
            'id',
            'review',
          ]
          //     include: [
          //       {
          //         model: Game,
          //         attributes: [
          //           'id',
          //           'name'
          //         ]
          //       }
          //     ],
          //     order: [['created_at', 'DESC']],
          //     limit: 5
        }
      ]
    })
    const user = userData.get({ plain: true });
    res.render('user', { user })
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/signup', async (req, res) => {
  res.render('signup')
})

module.exports = router;
