const {
	getTutor,
	getTutors,
	getTutorsByDate,
	getSortedTutors,
} = require('../database')

module.exports = {
	sendAllTutors: async (req, res) => {
		const tutors = await getTutors()
		res.send(tutors)
	},
	sendSingleTutor: async (req, res) => {
		const id = req.params.id
		const tutorLessons = await getTutor(id)
		res.send(tutorLessons)
	},
	sendTutorsByDate: async (req, res) => {
		const date = req.body.date
		const availableTutors = await getTutorsByDate(date)
		res.send(availableTutors)
	},
}
