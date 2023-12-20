const express = require('express')
const router = express.Router()

const {
	sendAllTutors,
	sendSingleTutor,
} = require('../controllers/mainControllers.js')

router.get('/tutors', sendAllTutors)
router.get('/tutors/:id', sendSingleTutor)

module.exports = router
