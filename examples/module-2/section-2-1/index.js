const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(PORT, () => {
	console.log(`CORS enabled server listening on ${PORT}`)
})

