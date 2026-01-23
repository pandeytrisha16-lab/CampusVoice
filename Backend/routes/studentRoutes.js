const express = require("express");
const router = express.Router();
const { createComplaint, getMyComplaints } = require("../controllers/studentController");
const { authMiddleware, authorizeRoles } = require("../middleware/authMiddleware");

router.use(authMiddleware);
router.use(authorizeRoles("student"));

router.post("/complaints", createComplaint);
router.get("/complaints", getMyComplaints);

module.exports = router;
