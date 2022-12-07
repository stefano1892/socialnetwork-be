var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "socialnetwork",
  port: 3306
});

//con.connect(function (err) {
//  if (err) throw err;
//  console.log("Connected!");
//});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (name, surname) VALUES ('Stefano', 'Calcaterra')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});