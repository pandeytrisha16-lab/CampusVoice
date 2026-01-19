const Complaint = require("../models/Complaint");

exports.lodgeComplaint = async (req, res) => {
  const { category, title, description } = req.body;

  const complaint = await Complaint.create({
    student: req.user._id,
    category,
    title,
    description,
  });

  res.json({ message: "Complaint lodged", complaint });
};

exports.myComplaints = async (req, res) => {
  const complaints = await Complaint.find({ student: req.user._id });
  res.json(complaints);
};
