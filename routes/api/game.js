const router = require('express').Router()

router.get('/', getAllGames)
router.get('/:id', getGameByID)
router.post('/', createGame)
router.put('/:id', updateGame)
router.delete('/:id', deleteGame)

module.exports = router