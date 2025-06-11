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

module.exports = router;
