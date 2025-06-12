const express = require("express");
const router = express.Router();
const regCtrl = require("../controller/regCtrl"); 

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/regCtrl",(req,res)=>
{
    res.render("login");
});
router.get("/login", (req, res) => {
    res.render("login"); // views/login.ejs
});
router.get("/register", (req, res) => {
    res.render("register"); // views/login.ejs
});
// Home Page
router.get("/", (req, res) => {
    res.render("home");
});
// admin dashboard
router.get("/", regCtrl.regCtrl);

// Register Page
/*router.get("/register", (req, res) => {
    res.render("register"); // views/register.ejs
});*/

// Handle Login Form Submission
router.post("/login", (req, res) => {
  const { username, password } = req.body;

      db.query("select *from admin where username=? and password=?");
      [username,password],(err,result)=>
      {
           if(err)
           {
               console.log("database error",err); 
           }
      }
  

});
// Register page route
/*router.get("/register", (req, res) => {
    res.render("register");
});*/

// Handle register form submission
/*router.post("/register", (req, res) => {
    const { fullname, email, username, password } = req.body;

    // TODO: Add database insert logic here
    console.log("User registered:", fullname, email, username);

    res.send("Registration successful! (This is just a placeholder)");
});*/

module.exports = router;
