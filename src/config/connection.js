const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ExamApplication"
});

conn.connect((err) => {
  if (err) {
    console.error("❌ Database not connected", err);
  } else {
    console.log("✅ Database is connected");
  }
});

module.exports = conn;
