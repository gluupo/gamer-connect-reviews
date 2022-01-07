const router = require('express').Router()
const controllers = require('../controllers')
const userRoutes = require('./user')
const gameRoutes = require('./game')


router.use('/users', userRoutes);
router.use('/games', gameRoutes);

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router