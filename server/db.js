var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "FILL_ME_IN",
  password: "FILL_ME_IN",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;
