const express = require("express");
const router = express.Router();

const conn = require('../config/connection'); // DB connection
const regCtrl = require("../controller/regCtrl"); // Admin controller

// Home Page
router.get("/", (req, res) => {
  res.render("home");
});

// Login Page
router.get("/login", (req, res) => {
  res.render("login");
});

// Register Page
router.get("/register", (req, res) => {
  res.render("register");
});

// Admin Dashboard (using controller)
router.get("/admin", regCtrl.regCtrl);

// Handle Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Fixed admin login
  if (username === "admin" && password === "admin@123") {
    res.render("AdminDashboard");
    //return res.send("Welcome, Admin!");
  }

  // Check for student login
  const sql = "SELECT * FROM student WHERE semail = ? AND spassword = ?";
  conn.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.send("Error during login.");
    }

    if (result.length > 0) {
      res.send(`Welcome, ${result[0].sname}`);
    } else {
      res.send("Invalid credentials.");
    }
  });
});

// Handle Registration
router.post("/register", (req, res) => {
  const { fullname, email, password, contact } = req.body;

  const sql = `INSERT INTO student (sname, semail, spassword, scontact)
               VALUES (?, ?, ?, ?)`;

  conn.query(sql, [fullname, email, password, contact], (err, result) => {
    if (err) {
      console.error("Registration error:", err);
      return res.send("Registration failed — username/email may exist.");
    }

    res.send("Student registered successfully!");
  });
});

module.exports = router;
