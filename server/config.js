var mysql      = require('mysql');
var connection = mysql.createConnection({

  host     : 'localhost',
  user     : 'root',
  password : 'aman12345',
  // port     :  '3300'
  database : 'blog',
  multipleStatements: true
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});

module.exports = connection;
