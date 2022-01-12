const router = require('express').Router()
const controllers = require('../../controllers')
const userRoutes = require('./user')
const gameRoutes = require('./game')
const reviewRoutes = require('./reviews')
const path = require('path')

router.use('/users', userRoutes);
router.use('/games', gameRoutes);
router.use('/reviews', reviewRoutes);

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }
//   res.render('login');
// });

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router