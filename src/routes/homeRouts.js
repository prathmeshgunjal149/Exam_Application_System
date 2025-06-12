const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const conn = require('../config/connection'); // ✅ Correct path


=======
const regCtrl = require("../controller/regCtrl"); 

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/regCtrl",(req,res)=>
{
    res.render("login");
});
router.get("/login", (req, res) => {
    res.render("login"); // views/login.ejs
});
router.get("/register", (req, res) => {
    res.render("register"); // views/login.ejs
});
>>>>>>> 6bab29c06ce568b814a76dbc79f776cd7936c422
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

// Handle Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin@123") {
    return res.send("Welcome Admin!");
  }

  const sql = "SELECT * FROM student WHERE sname = ? AND spassword = ?";
  conn.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error("Login error:", err);
      return res.send("Error during login");
    }
    if (results.length > 0) {
      res.send(`Welcome Student, ${results[0].sname}!`);
    } else {
      res.send("Invalid credentials");
    }
  });
});

// Handle Registration
router.post("/register", (req, res) => {
  const { fullname, email, contact, password } = req.body;

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
