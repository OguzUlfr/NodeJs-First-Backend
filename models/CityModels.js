const mysql = require("mysql");



const List = (req,res) => {
    
    const connect = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });
    connect.query(`SELECT * FROM ${req.params.test}`, (err,result) => {
        let results = Object.values(JSON.parse(JSON.stringify(result)));
        res.status(200).json(results);
        res.end();
    });
}

const Add = (req,res) => {
    const connect = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });
    connect.connect(function(err) {
        if (err) throw err;
        const { city } = req.body
        var sql = `INSERT INTO sehir (id, name) VALUES (NULL, "${city}")`;
        connect.query(sql, function (err, result) {
          if (err) throw err;
          res.status(200).json({
            "message" : `City(${city}) Add Success`
          });
          res.end();
        });
      });
}


module.exports = {  List, Add }