const router = require('express').Router()
const { createReview } = require('../../controllers/api/reviewController')

router.post('/', createReview)

module.exports = router