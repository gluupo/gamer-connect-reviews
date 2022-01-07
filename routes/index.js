const router = require('express').Router()
const controllers = require('../controllers')
const apiRoutes = require('./api')

router.use('/api', apiRoutes);

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router