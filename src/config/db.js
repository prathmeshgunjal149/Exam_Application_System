const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ExamApplication"
});

conn.connect((err) => {
    if (err) {
        console.log("Database not connected");
    } else {
        console.log("Database is connected");
    }
});

module.exports = conn;
