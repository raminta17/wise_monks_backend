const express = require('express')
const router = require('./router/mainRouter.js')

const app = express()

app.use(express.json())
app.use('/', router)

app.use((err, req, res, next) => {
	console.error(err.stack)
	res.status(500).send('Something broke!')
})

app.listen(8080, () => {
	console.log('Server is running on port 8080')
})
