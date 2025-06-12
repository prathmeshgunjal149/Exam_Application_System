// Import modules
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const conn = require("./config/connection.js");
const homeRoutes = require("./routes/homeRouts");

// Initialize app
const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Session middleware (optional)
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Set EJS as templating engine
app.set("view engine", "ejs");

// Routes
app.use("/", homeRoutes); // ✅ match the variable name at the top

// Export app if needed (for testing or modularization)
module.exports = app;