const express = require("express");
const router = express.Router();
const facultyController = require("../controllers/faculty.controller");
const VerifyToken = require('../middlewares/verify-token');

// Protected routes - ต้องมี token ถึงจะเข้าถึงได้
router.get("/", VerifyToken.verifyToken, facultyController.findAll);
router.get("/:id", VerifyToken.verifyToken, facultyController.findOne);
router.post("/", VerifyToken.verifyToken, facultyController.createOne);
router.put("/:id", VerifyToken.verifyToken, facultyController.update);
router.delete("/:id", VerifyToken.verifyToken, facultyController.delete);

module.exports = router;
