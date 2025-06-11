let express=require("express");
let app=express();
 let conn=require("./config/db.js");
const bodyParser = require("body-parser");

const homeRoutes = require('./routs/homeRoutes');

app.use("/", homeRoutes);


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
let session=require("express-session");

app.set("view engine",ejs);
module.exports=app;
