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
	// push ข้อมูลจาก body ไปใน users array
	users.push(req.body)
	// ดึงเฉพาะข้อมูล username เก็บไว้ในตัวแปร username
	let username = req.body.username
	// ส่ง response กลับไปให้ผู้ใช้ API
	res.json(`Add user: '${username}' was successfully.`)
})

app.listen(PORT, () => {
	console.log(`SERVER ON PORT ${PORT}`)
})

