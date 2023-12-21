const express = require('express')
const router = express.Router()

const {
	sendAllTutors,
	sendSingleTutor,
	sendTutorsByDate,
} = require('../controllers/mainControllers.js')

router.get('/tutors', sendAllTutors)
router.get('/tutors/:id', sendSingleTutor)
router.post('/tutors/date', sendTutorsByDate)

module.exports = router
