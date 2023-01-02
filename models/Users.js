const express = require("express");
const modelRoute = express.Router();
const mysql = require("mysql");

var dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_js_test"
  });


modelRoute.get('/', (req, res) => {
    dbConnect.connect();
     dbConnect.query("SELECT * FROM user", function (err, result, fields) {
        if (err) throw err;
        let data = Object.values(JSON.parse(JSON.stringify(result)));
        res.json(data);
        res.end();
      });
      dbConnect.end();
});

modelRoute.post('/', (req, res) => {
    dbConnect.connect();
    const {email} = req.body;
    var sql = `INSERT INTO user (id, email) VALUES (NULL, '${email}')`;
     dbConnect.query(sql, function (err, result) {
        if (err) throw err;
        res.json({"message": "User Add"});
        res.end();
      });
      dbConnect.end();
});

modelRoute.post('/:id', (req, res) => {
    dbConnect.connect();
    const {id} = req.params;
    const {email} = req.body;
    var sql = `UPDATE user SET email = '${email}' WHERE id = '${id}'`;
     dbConnect.query(sql, function (err, result) {
        if (err) throw err;
        res.json({"message": "User Update"});
        res.end();
      });
      dbConnect.end();
});

modelRoute.get('/:id', (req, res) => {
    dbConnect.connect();
    const {id} = req.params;
    var sql = `DELETE FROM user WHERE id = '${id}'`;
     dbConnect.query(sql, function (err, result) {
        if (err) throw err;
        res.json({"message": "User Delete"});
        res.end();
      });
      dbConnect.end();
});

module.exports = modelRoute;