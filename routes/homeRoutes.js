const router = require('express').Router();
const { User, Review, Game } = require('../models');
const withAuth = require('../utils/auth');
const axios = require('axios')
const { apiRequestForGames, getGameById, apiRequestForGamebyID } = require('../controllers/api/gameControllers.js')

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
    console.log(req.session)
    res.render('reviews', { reviews, loggedIn: req.session.loggedIn, user_id: req.session.id })
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/game/search/', async (req, res) => {
  console.log(req.query.q)
  try {
    const games = await apiRequestForGames(req.query.q)
    res.render('search', { games })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/game/id/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const game = await apiRequestForGamebyID(req.params.id)
    res.render('game', { game, loggedIn: req.session.loggedIn, user_id: req.session.id })
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Review,
          attributes: [
            'id',
            'review',
          ],
          include: [
            {
              model: Game,
              attributes: [
                'id',
                'name',
                'cover_id'
              ]
            }
          ],
          order: [['created_at', 'DESC']],
          limit: 5
        },
      ],
      attributes: [
        'id',
        'username'
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
