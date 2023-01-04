const express = require("express");
const brandRoute = express.Router();
const mysql = require("mysql2");

const dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_js_test"
  });

  const table = 'brands';


brandRoute.get('/', (req, res) => {
  const sql = `SELECT * FROM ${table}`
  dbConnect.query(
    sql,
    function(err, results, fields) {
      
      res.status(200).json(results);
      res.end();
    }
  );
});

brandRoute.post('/', (req, res) => {
    const {name, description, image} = req.body;
    const sql = `INSERT INTO ${table} (brand_id, brand_name, brand_description, brand_image) 
    VALUES (NULL, '${name}', '${description}', '${image}')`;
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json({"message": "Brand Add"});
        res.end();
      }
    );
});

brandRoute.post('/:id', (req, res) => {
    const {id} = req.params;
    const {brand} = req.body;
    const sql = `UPDATE ${table} SET brand_name = '${brand}' WHERE id = '${id}'`;
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json({"message": "Brand Add"});
        res.end();
      }
    );
});

brandRoute.delete('/:id', (req, res) => {
    const {id} = req.params;
    const sql = `DELETE FROM ${table} WHERE id = '${id}'`;
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json({"message": "Brand Add"});
        res.end();
      }
    );
});

module.exports = brandRoute;