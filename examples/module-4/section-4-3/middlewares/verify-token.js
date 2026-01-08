const jwt = require('jsonwebtoken');

module.exports = {
	verifyToken(req, res, next) {
		let token;
		
		// ตรวจสอบ token จากหลายแหล่ง
		if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
			// Token จาก Authorization header: Bearer <token>
			token = req.headers.authorization.split(' ')[1];
		} else if (req.query && req.query.token) {
			// Token จาก query parameter: ?token=<token>
			token = req.query.token;
		} else if (req.cookies && req.cookies.token) {
			// Token จาก cookie
			token = req.cookies.token;
		}
		
		// ⚠️ ในทางปฏิบัติ ควรเก็บ SECRETKEY ไว้ใน .env
		const SECRETKEY = process.env.JWT_SECRET || "secret1234";
		
		if (!token) {
			return res.status(401).json({ 
				auth: false, 
				message: 'No token provided.' 
			});
		}
		
		jwt.verify(token, SECRETKEY, function (err, decoded) {
			if (err) {
				return res.status(401).json({ 
					auth: false, 
					message: 'Failed to authenticate token.' 
				});
			}
			
			// เก็บข้อมูล decoded token ใน req.user สำหรับใช้ใน routes อื่น
			req.user = decoded;
			next();
		});
	}
}

