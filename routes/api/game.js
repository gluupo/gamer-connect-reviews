const router = require('express').Router()
const { getAllGames, getGameById, createGame, updateGame, deleteGame } = require('../../controllers/api/gameControllers')

router.get('/', getAllGames)
router.get('/:id', getGameById)
router.post('/', createGame)
router.put('/:id', updateGame)
router.delete('/:id', deleteGame)

module.exports = router