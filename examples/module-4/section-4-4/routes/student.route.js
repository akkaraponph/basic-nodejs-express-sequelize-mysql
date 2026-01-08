const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");
const VerifyToken = require('../middlewares/verify-token');

// Public routes
router.post("/login", studentController.login);

// Protected routes
router.get("/", VerifyToken.verifyToken, studentController.findAll);
router.get("/:id", VerifyToken.verifyToken, studentController.findOne);

module.exports = router;

