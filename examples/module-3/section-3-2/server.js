const express = require('express')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
	res.json({ message: "Welcome to my app" })
})

app.listen(PORT, () => {
	console.log(`SERVER ON PORT ${PORT}`)
})

