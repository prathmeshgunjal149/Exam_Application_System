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
module.exports = app;
