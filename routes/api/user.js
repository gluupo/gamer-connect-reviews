const router = require('express').Router()
const withAuth = require('../../utils/auth');
const { createUser, loginUser, logoutUser } = require('../../controllers/api/userControllers')


router.post('/', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);


module.exports = router