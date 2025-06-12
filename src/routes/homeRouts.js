const express = require("express");
const router = express.Router();
const regCtrl = require("../controller/regCtrl");

// Route to render login page
router.get("/", regCtrl.loginPage);

module.exports = router;

