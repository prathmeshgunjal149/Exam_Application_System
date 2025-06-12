const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Fix the filename here 👇
const homeRoutes = require("./routes/homeRouts"); 
app.use("/", homeRoutes);

module.exports = app;
