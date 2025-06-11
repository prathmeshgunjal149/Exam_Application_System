let express=require("express");
let app=express();
 let conn=require("./config/db.js");

const homeRoutes = require("./routs/homeRoutes");
app.use("/", homeRoutes);
module.exports=app;


