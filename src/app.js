let express = require("express");
let app = express();
let conn = require("./config/db.js");
const homeRoutes = require("./routes/homeRouts");
app.use("/", homeRoutes);
app.set("view engine", "ejs");    //set ejs    


module.exports = app;
