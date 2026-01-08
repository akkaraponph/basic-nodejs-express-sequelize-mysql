const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// เชื่อมต่อฐานข้อมูล MySQL
const connection = mysql.createConnection({
	host: process.env.DB_HOSTNAME || 'localhost',
	user: process.env.DB_USERNAME || 'root',
	password: process.env.DB_PASSWORD || '',
	database: process.env.DB_DATABASE || 'basic_api_express_db'
});

// Get all users
app.get('/users', (req, res, next) => {
	try {
		connection.query(
			'SELECT * FROM `users`',
			(err, results, fields) => {
				if (err) {
					return res.status(500).json({ message: "Database error", error: err });
				}
				res.status(200).json(results);
			}
		);
	} catch (error) {
		res.status(400).json({ message: "get user was failed", error: error.message });
	}
})

// Get user by id
app.get('/users/:id', (req, res, next) => {
	try {
		const id = req.params.id;
		connection.query(
			'SELECT * FROM `users` WHERE `id` = ?',
			[id],
			(err, results) => {
				if (err) {
					return res.status(500).json({ message: "Database error", error: err });
				}
				if (results.length === 0) {
					return res.status(404).json({ message: "User not found" });
				}
				res.status(200).json({ payload: results });
			}
		);
	} catch (error) {
		res.status(400).json({ message: "get user by id was failed", error: error.message });
	}
})

// Create user
app.post('/users', (req, res, next) => {
	try {
		const { fname, lname, username, password, avatar } = req.body;
		
		connection.query(
			'INSERT INTO `users`(`fname`, `lname`, `username`, `password`, `avatar`) VALUES (?, ?, ?, ?, ?)',
			[fname, lname, username, password, avatar],
			(err, results) => {
				if (err) {
					return res.status(500).json({ 
						message: "create user was failed", 
						error: err.message 
					});
				}
				res.status(201).json({ 
					message: "create user was successfully", 
					payload: results 
				});
			}
		);
	} catch (error) {
		res.status(400).json({ 
			message: "create user was failed", 
			error: error.message 
		});
	}
})

// Update user
app.put('/users/:id', (req, res, next) => {
	try {
		const id = req.params.id;
		const { fname, lname, username, password, avatar } = req.body;
		
		connection.query(
			'UPDATE `users` SET `fname`= ?, `lname`= ?, `username`= ?, `password`= ?, `avatar`= ? WHERE id = ?',
			[fname, lname, username, password, avatar, id],
			(err, results) => {
				if (err) {
					return res.status(500).json({ 
						message: "update user was failed", 
						error: err.message 
					});
				}
				if (results.affectedRows === 0) {
					return res.status(404).json({ 
						message: "User not found" 
					});
				}
				res.status(200).json({ 
					message: "update user was successfully", 
					payload: results 
				});
			}
		);
	} catch (error) {
		res.status(400).json({ 
			message: "update user was failed", 
			error: error.message 
		});
	}
})

app.listen(PORT, () => {
	console.log(`CORS enabled server listening on ${PORT}`)
})

