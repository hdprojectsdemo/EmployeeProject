const mysql = require('mysql'); 

const config = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Harshal@1995',
    database : 'emp',
    multipleStatements: true
  });



  config.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log("Database Connection created successfully");
});

   
  module.exports = config;