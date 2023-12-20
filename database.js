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
		const [rows] = await pool.query('SELECT * FROM tutors')
		return rows
	},
	getTutor: async id => {
		const [rows] = await pool.query(
			`SELECT * 
        FROM tutors
        WHERE id = ?
        `,
			[id],
		)
		return rows[0]
	},
}
