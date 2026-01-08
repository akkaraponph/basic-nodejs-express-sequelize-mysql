const db = require('../models')
const studentModel = db.students;
const jwt = require('jsonwebtoken');

// Login
exports.login = async (req, res) => {
	try {
		const id = req.body.stdId;
		const pass = req.body.stdPass;
		
		// ค้นหานักศึกษาจากฐานข้อมูล
		const response = await studentModel.findOne({
			where: {
				std_id: id,
				std_pass: pass
			},
			raw: true
		})

		if (response) {
			// ⚠️ ในทางปฏิบัติ ควรเก็บ SECRETKEY ไว้ใน .env
			const SECRETKEY = process.env.JWT_SECRET || "secret1234";
			
			// สร้าง JWT token
			const token = jwt.sign({
				std_id: response.stdId,
			}, SECRETKEY, {
				expiresIn: "1h", // Token หมดอายุใน 1 ชั่วโมง
			});
			
			// ลบ password ออกจาก response
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

