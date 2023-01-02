const express = require("express");
const brandRoute = express.Router();
const mysql = require("mysql");

var dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_js_test"
  });


  brandRoute.get('/', (req, res) => {
    dbConnect.connect();
     dbConnect.query("SELECT * FROM brands", function (err, result, fields) {
        if (err) throw err;
        let data = Object.values(JSON.parse(JSON.stringify(result)));
        res.json(data);
        res.end();
      });
      dbConnect.end();
});

brandRoute.post('/', (req, res) => {
    dbConnect.connect();
    const {brand} = req.body;
    var sql = `INSERT INTO brands (id, email) VALUES (NULL, '${brand}')`;
     dbConnect.query(sql, function (err, result) {
        if (err) throw err;
        res.json({"message": "Brand Add"});
        res.end();
      });
      dbConnect.end();
});

brandRoute.post('/:id', (req, res) => {
    dbConnect.connect();
    const {id} = req.params;
    const {brand} = req.body;
    var sql = `UPDATE brands SET brand_name = '${brand}' WHERE id = '${id}'`;
     dbConnect.query(sql, function (err, result) {
        if (err) throw err;
        res.json({"message": "Brand Update"});
        res.end();
      });
      dbConnect.end();
});

brandRoute.get('/:id', (req, res) => {
    dbConnect.connect();
    const {id} = req.params;
    var sql = `DELETE FROM brands WHERE id = '${id}'`;
     dbConnect.query(sql, function (err, result) {
        if (err) throw err;
        res.json({"message": "Brand Delete"});
        res.end();
      });
      dbConnect.end();
});