// app.js
const express = require("express");
const bodyParser = require("body-parser");
//const session = require("express-session");
const conn = require("./config/db.js");       // your MySQL connection
;

const app = express();

// Body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files
app.use(express.static("public"));


// View engine
app.set("view engine", "ejs");

// Routes
const homeRoutes = require("./routes/homeRouts")
app.use("/", homeRoutes);

module.exports = app;
