const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  lodgeComplaint,
  myComplaints,
} = require("../controllers/complaintController");

router.post("/lodge", auth, lodgeComplaint);
router.get("/my", auth, myComplaints);

module.exports = router;
