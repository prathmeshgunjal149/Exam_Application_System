<<<<<<< HEAD
let express = require("express");
let app = express();
let conn = require("./config/db.js");

app.set("view engine", "ejs");    //set ejs    

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
const homeRoutes = require("./routes/homeRouts");
app.use("/", homeRoutes);
=======
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

>>>>>>> 67a519add6f65f756647b8f59b86623d4896709d
module.exports = app;
