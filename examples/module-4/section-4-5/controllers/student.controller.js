const db = require('../models')
const studentModel = db.students;
const jwt = require('jsonwebtoken');

// Get all students (Protected)
exports.findAll = async (req, res) => {
	try {
		const response = await studentModel.findAll()
		res.status(200).json({
			message: "get all student was successfully",
			payload: response
		})
	} catch (error) {
		res.status(500).json({
			message: error.message || "get all student was failed"
		})
	}
}

// Get student by id (Protected)
exports.findOne = async (req, res) => {
	try {
		const id = req.params.id
		const response = await studentModel.findOne({
			where: { std_id: id }
		})
		
		if (response) {
			res.status(200).json({
				message: "get one student was successfully",
				payload: response
			})
		} else {
			res.status(404).json({
				message: "Student not found"
			})
		}
	} catch (error) {
		res.status(500).json({
			message: error.message || "get one student was failed"
		})
	}
}

// Login (Public)
exports.login = async (req, res) => {
	try {
		const id = req.body.stdId;
		const pass = req.body.stdPass;
		
		const response = await studentModel.findOne({
			where: {
				std_id: id,
				std_pass: pass
			},
			raw: true
		})

		if (response) {
			// ใช้ SECRETKEY จาก environment variable
			const SECRETKEY = process.env.JWT_SECRET;
			
			const token = jwt.sign({
				std_id: response.stdId,
			}, SECRETKEY, {
				expiresIn: "1h",
			});
			
			delete response.stdPass;
			
			res.status(200).json({
				message: "login was successfully",
				payload: { ...response, token }
			})
		} else {
			res.status(401).json({
				message: "Invalid credentials"
			})
		}

	} catch (error) {
		res.status(500).json({
			message: error.message || "login student was failed"
		})
	}
}
