const express = require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 5000

const users = require('./db.json')

app.get('/', (req, res) => {
	res.send("Hello! Node.js")
})

app.get('/users', (req, res) => {
	res.status(200).json(users)
})

app.get('/users/:id', (req, res) => {
	const user = users.find(el => el.id === Number(req.params.id))
	if (user) {
		res.json(user)
	} else {
		res.status(404).json({ message: 'User not found' })
	}
})

// สร้าง users
app.post('/users', (req, res) => {
	users.push(req.body)
	let username = req.body.username
	res.status(201).json(`Add user: '${username}' was successfully.`)
})

// อัปเดต user
app.put('/users/:id', (req, res) => {
	const userIndex = users.findIndex(user => user.id === Number(req.params.id))
	
	if (userIndex !== -1) {
		// อัปเดตข้อมูล
		users[userIndex] = { ...users[userIndex], ...req.body }
		res.json(`Update user id: '${users[userIndex].id}' was successfully.`)
	} else {
		res.status(404).json({ message: 'User not found' })
	}
})

app.listen(PORT, () => {
	console.log(`SERVER ON PORT ${PORT}`)
})

