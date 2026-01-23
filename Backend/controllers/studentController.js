const Complaint = require("../models/Complaint");

exports.createComplaint = async (req, res) => {
  try {
    const { text } = req.body;
    const complaint = await Complaint.create({ user: req.user._id, text });
    res.status(201).json({ message: "Complaint submitted", complaint });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.user._id });
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
