let express = require("express");
let app = express();
let conn = require("./config/db.js");
const homeRoutes = require("./routes/homeRouts");
app.use("/", homeRoutes);
app.set("view engine", "ejs");         // EJS set करा
//app.set("views", __dirname + "/views"); // Views फोल्डरचं path

module.exports = app;
