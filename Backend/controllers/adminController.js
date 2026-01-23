const Complaint = require("../models/Complaint");

exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().populate("user", "name email");
    res.status(200).json(complaints);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateComplaintStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const complaint = await Complaint.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json({ message: "Status updated", complaint });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteComplaint = async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Complaint deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
