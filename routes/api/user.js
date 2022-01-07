const router = require('express').Router()
const withAuth = require('../../utils/auth');

router.get('/', getUsers)
router.get('/:id', getUsersById)
router.post('/', createUser)
router.put('/:id', withAuth, updateUser)
router.delete('/:id', withAuth, deleteUser)

module.exports = router