const mysql = require("mysql");

//Establishes connection with database
const connection = mysql.createConnection({
    user: "mh4tbe01oz0jbeo5",
    password: "oqm73juayyzn9vmr",
    port: 3306,
    host: "lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    database: "adf339aae14juvku",
    multipleStatements: true
});

connection.connect(function(err,){
    if (err) throw err;
    console.log (`Connected as id ${connection.threadId}`);
})

module.exports = connection;