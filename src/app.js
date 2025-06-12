const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Fix the filename here 👇
const homeRoutes = require("./routes/homeRouts"); 
app.use("/", homeRoutes);
<<<<<<< HEAD
=======
app.set("view engine", "ejs");    //set ejs    

>>>>>>> 6bab29c06ce568b814a76dbc79f776cd7936c422

module.exports = app;
