const router = require('express').Router()
const withAuth = require('../../utils/auth');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginUser, logoutUser } = require('../../controllers/api/userControllers')


router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', withAuth, updateUser)
router.delete('/:id', withAuth, deleteUser)
router.post('/login', withAuth, loginUser)
router.post('/logout', withAuth, logoutUser)

module.exports = router