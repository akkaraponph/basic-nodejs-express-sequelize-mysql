const db = require('../models')
const facultyModel = db.faculty;
const Op = db.Sequelize.Op;

// Get all faculty
exports.findAll = async (req, res) => {
	try {
		const response = await facultyModel.findAll()
		res.status(200).json({
			message: "get all faculty was successfully",
			payload: response
		})
	} catch (error) {
		res.status(500).json({
			message: error.message || "get all faculty was failed"
		})
	}
}

