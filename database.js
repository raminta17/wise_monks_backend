const dotenv = require('dotenv')
const mysql = require('mysql2')
dotenv.config()

const pool = mysql
	.createPool({
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABASE,
	})
	.promise()

module.exports = {
	getTutors: async () => {
		let [rows] = await pool.query('SELECT * FROM tutors')
		const [availabilityRows] = await pool.query(
			`SELECT tutor_id, COUNT(tutor_id) as lessons_number
			 FROM lessons
			 GROUP BY tutor_id;`,
		)
		const tutorsAvailability = availabilityRows.map(row => {
			return row.lessons_number
		})
		newRows = rows.map((row, index) => ({
			...row,
			hasLessons: tutorsAvailability[index],
		}))
		return newRows
	},
	getTutor: async id => {
		const [rows] = await pool.query(
			`SELECT UNIX_TIMESTAMP(lesson_date) AS epoch_time 
        FROM lessons
        WHERE tutor_id = ?
        `,
			[id],
		)
		const tutorDates = rows.map(row => {
			return row.epoch_time * 1000
		})
		return tutorDates
	},
	getTutorsByDate: async date => {
		const [rows] = await pool.query(
			`SELECT DISTINCT tutor_id FROM lessons WHERE tutor_id NOT IN (SELECT tutor_id FROM lessons WHERE lesson_date = ? )`,
			[date],
		)
		const tutorsId = rows.map(row => {
			return row.tutor_id
		})
		return tutorsId
	},
}
