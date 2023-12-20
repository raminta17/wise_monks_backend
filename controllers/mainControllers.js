const { getTutor, getTutors } = require('../database')

module.exports = {
	sendAllTutors: async (req, res) => {
		const tutors = await getTutors()
		res.send(tutors)
	},
	sendSingleTutor: async (req, res) => {
		const id = req.params.id
		const tutor = await getTutor(id)
		res.send(tutor)
	},
}
