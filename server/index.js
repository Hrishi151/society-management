import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json()); // ✅ Add this before routes

// ✅ Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is working!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
