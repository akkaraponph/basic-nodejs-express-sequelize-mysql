const express = require('express')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 5000

const users = require('./db.json')

// Home route
app.get('/', (req, res) => {
	res.send("Hello! Node.js")
})

// Get all users
app.get('/users', (req, res) => {
	res.status(200).json(users)
})

// Get user by id
app.get('/users/:id', (req, res) => {
	const user = users.find(el => el.id === Number(req.params.id))
	if (user) {
		res.json(user)
	} else {
		res.status(404).json({ message: 'User not found' })
	}
})

// Create user
app.post('/users', (req, res) => {
	users.push(req.body)
	let username = req.body.username
	res.status(201).json(`Add user: '${username}' was successfully.`)
})

// Update user
app.put('/users/:id', (req, res) => {
	const userIndex = users.findIndex(user => user.id === Number(req.params.id))
	
	if (userIndex !== -1) {
		users[userIndex] = { ...users[userIndex], ...req.body }
		res.json(`Update user id: '${users[userIndex].id}' was successfully.`)
	} else {
		res.status(404).json({ message: 'User not found' })
	}
})

// Delete user
app.delete('/users/:id', (req, res) => {
	const userIndex = users.findIndex(user => user.id === Number(req.params.id))
	
	if (userIndex !== -1) {
		const deletedUser = users[userIndex]
		users.splice(userIndex, 1)
		res.json(`Delete user '${deletedUser.username}' was successfully.`)
	} else {
		res.status(404).json({ message: 'User not found' })
	}
})

app.listen(PORT, () => {
	console.log(`SERVER ON PORT ${PORT}`)
})

