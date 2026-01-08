const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");
const VerifyToken = require('../middlewares/verify-token');

// Public route - ไม่ต้องมี token
router.post("/login", studentController.login);

// Protected routes - ต้องมี token ถึงจะเข้าถึงได้
router.get("/", VerifyToken.verifyToken, studentController.findAll);
router.get("/:id", VerifyToken.verifyToken, studentController.findOne);

module.exports = router;

