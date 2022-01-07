const router = require('express').Router()
const withAuth = require('../../utils/auth');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../../controllers/api/userControllers')


router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.put('/:id', withAuth, updateUser)
router.delete('/:id', withAuth, deleteUser)

module.exports = router