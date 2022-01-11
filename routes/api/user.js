const router = require('express').Router()
const withAuth = require('../../utils/auth');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginUser, logoutUser } = require('../../controllers/api/userControllers')


router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', withAuth, updateUser);
router.delete('/:id', withAuth, deleteUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);


module.exports = router