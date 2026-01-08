const db = require('../models')
const studentModel = db.students;

// Get all students
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

// Get student by id
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

