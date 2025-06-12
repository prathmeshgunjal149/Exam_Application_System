let express=require("express");
let app=express();
 let conn=require("./config/db.js");
const bodyParser = require("body-parser");

const homeRoutes = require('./routs/homeRoutes');

<<<<<<< HEAD
=======
const homeRoutes = require("./routes/homeRoutes.js");
>>>>>>> 1318ce0383b43d581dd55fe30442f90a6d40a43b
app.use("/", homeRoutes);


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
let session=require("express-session");

app.set("view engine",ejs);
module.exports=app;
