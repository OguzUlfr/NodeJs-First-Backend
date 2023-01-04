const express = require("express");
const categoryRoute = express.Router();
const mysql = require("mysql2");

const dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_js_test"
  });

  const table = 'category'

  categoryRoute.get('/', (req, res) => {
    const sql = `SELECT * FROM ${table}`
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json(results);
        res.end();
      }
    );
});

categoryRoute.post('/', (req, res) => {
    const {name, description, image} = req.body;
    const sql = `INSERT INTO ${table} (cat_id, cat_name, cat_description, cat_image) VALUES (NULL, '${name}', '${description}', '${image}')`;
    dbConnect.query(
      sql,
      function(err, results, fields) {
        res.status(200).json({"message": "Brand Add"});
        res.end();
      }
    );
});

categoryRoute.post('/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const sql = `UPDATE ${table} SET cat_name = '${name}' WHERE cat_id = '${id}'`;
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json({"message": "Brand Add"});
        res.end();
      }
    );
});

categoryRoute.delete('/:id', (req, res) => {
    const {id} = req.params;
    const sql = `DELETE FROM ${table} WHERE cat_id = '${id}'`;
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json({"message": "Brand Add"});
        res.end();
      }
    );
});

module.exports = categoryRoute;