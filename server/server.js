import dotenv from "dotenv";
dotenv.config(); // this is to use ".env" here
import express, { json } from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(json());

// Enable CORS, it´s a security thing, google it
app.use(cors({ origin: "http://localhost:3000" }));

// Database connection with our .env information!
// the connection will not work if you dont create the .env i´ve sent you on whatsapp!
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit(1); // Exit the application if the connection fails
  }
  console.log("Connected YEEEEEEEEY.");
});

// Route to get activities for a specific user
app.get("/api/activities/:userId", (req, res) => {
  const { userId } = req.params;

  const query = "SELECT * FROM activities WHERE user_id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json(results); // Return the activities
  });
});

// Route to register a new user
app.post("/api/register", (req, res) => {
  let { name, birthdate, phone, email, password } = req.body;

  // Convert our current date format from DD/MM/YYYY to YYYY-MM-DD 
  //remember to fix that later, but for now just use the "/" when registering an user
  const [day, month, year] = birthdate.split("/");
  birthdate = `${year}-${month}-${day}`;

  const query = `
    INSERT INTO users (name, birthdate, phone, email, password) 
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [name, birthdate, phone, email, password], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "User registered successfully" });
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Login successful
    const user = results[0];
    res.status(200).json({ message: "Login successful", userId: user.id,name: user.name, });
  });
});

// Route to add a new activity
app.post("/api/activities", (req, res) => {
  const {
    user_id,
    activity_name,
    activity_description,
    activity_length,
    activity_category,
    indoors,
  } = req.body;

  const query = `
  INSERT INTO activities (user_id, activity_name, activity_description, activity_length, activity_category, indoors)
  VALUES (?, ?, ?, ?, ?, ?)
`;

db.query(
  query,
  [user_id, activity_name, activity_description, activity_length, activity_category, indoors],
  (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "Activity added successfully." });
  }
);
});

// Route to delete a specific activity
app.delete("/api/activities/:id", (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM activities WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Activity not found" });
    }
    res.status(200).json({ message: "Activity deleted successfully" });
  });
});

// Start the server
const PORT = 4000; // Backend server port to 4000, IT MUST MATCH THE ONE IN THE REACT APLICATION!
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
