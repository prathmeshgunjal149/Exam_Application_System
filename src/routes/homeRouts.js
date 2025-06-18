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


// Admin Dashboard (controller-based)
router.get("/admin", regCtrl.regCtrl);

// Handle Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Fixed admin login
  if (username === "admin" && password === "admin@123") {
    return res.render("AdminDashboard"); // ✅ Add return to stop execution
  }

  // Student login
  const sql = "SELECT * FROM student WHERE semail = ? AND spassword = ?";
  conn.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).send("Error during login.");
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
      return res.status(500).send("Registration failed — username/email may exist.");
    }

    res.send("Student registered successfully!");
  });
});

// Show all subjects
router.get("/subject", (req, res) => {
  const sql = "SELECT * FROM course";
  conn.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching subjects:", err);
      return res.status(500).send("Error fetching subjects");
    }
    res.render("subject", { subjects: results });
  });
});

// Add new subject
router.post("/subject", (req, res) => {
  const { cname } = req.body;
  const sql = "INSERT INTO course (cname) VALUES (?)";
  conn.query(sql, [cname], (err, result) => {
    if (err) {
      console.error("Error adding subject:", err);
      return res.status(500).send("Failed to add subject");
    }
    res.redirect("/subject");
  });
});

// Delete subject
router.get("/subject/delete/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM course WHERE cid = ?";
  conn.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting subject:", err);
      return res.status(500).send("Failed to delete subject");
    }
    res.redirect("/subject");
  });
});
//exam
router.get("/exam",(req,res)=>
{
  res.render("exam");
})
module.exports = router;
