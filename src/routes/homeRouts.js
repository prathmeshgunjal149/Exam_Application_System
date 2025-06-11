const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home"); // renders views/home.ejs
});

module.exports = router;
