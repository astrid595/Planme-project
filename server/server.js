import dotenv from "dotenv";
dotenv.config(); // Load environment variables
import express, { json } from "express";
import mongoose from "mongoose"; // Replacing MySQL with MongoDB
import cors from "cors";
import Activity from "./models/Activity.js"; // Mongoose Activity model
import User from "./models/User.js"; // Mongoose User model (created below)

const app = express();
app.use(json());
app.use(cors({ origin: "http://localhost:3000" })); // Enable CORS for React app

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Route to get activities for a specific user
app.get("/api/activities/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const activities = await Activity.find({ user_id: userId });
    res.status(200).json(activities);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Route to register a new user
app.post("/api/register", async (req, res) => {
  try {
    let { name, birthdate, phone, email, password } = req.body;

    // Convert birthdate to YYYY-MM-DD format
    const [day, month, year] = birthdate.split("/");
    birthdate = `${year}-${month}-${day}`;

    const newUser = new User({
      name,
      birthdate,
      phone,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Route to login a user
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      userId: user._id,
      name: user.name,
    });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Route to add a new activity
app.post("/api/activities", async (req, res) => {
  try {
    const {
      user_id,
      activity_name,
      activity_description,
      activity_length,
      activity_category,
      indoors,
    } = req.body;

    const newActivity = new Activity({
      user_id,
      activity_name,
      activity_description,
      activity_length,
      activity_category,
      indoors,
    });

    await newActivity.save();
    res.status(201).json({ message: "Activity added successfully." });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Route to delete a specific activity
app.delete("/api/activities/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Activity.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ error: "Activity not found" });
    }

    res.status(200).json({ message: "Activity deleted successfully" });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});