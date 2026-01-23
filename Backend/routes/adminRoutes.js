const express = require("express");
const router = express.Router();
const { getAllComplaints, updateComplaintStatus, deleteComplaint } = require("../controllers/adminController");
const { authMiddleware, authorizeRoles } = require("../middleware/authMiddleware");

router.use(authMiddleware);
router.use(authorizeRoles("admin"));

router.get("/complaints", getAllComplaints);
router.put("/complaints/:id", updateComplaintStatus);
router.delete("/complaints/:id", deleteComplaint);

module.exports = router;
