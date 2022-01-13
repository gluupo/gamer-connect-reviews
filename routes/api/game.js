const router = require('express').Router()
const { getAllGames, getGameById, createGame } = require('../../controllers/api/gameControllers')

router.get('/search/', getAllGames)
router.get('/:id', getGameById)
router.post('/', createGame)

module.exports = router