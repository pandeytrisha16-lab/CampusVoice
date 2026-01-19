const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/complaints", require("./routes/complaintRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
