const router = require('express').Router()
const { loginUser, logoutUser } = require('../controllers')
const withAuth = require('../utils/auth')
const apiRoutes = require('./api')

router.use('/api', apiRoutes);
router.post('/login', withAuth, loginUser)
router.post('/logout', withAuth, logoutUser)

router.get('*', (req, res) => res.render('reviews', {}));

module.exports = router
