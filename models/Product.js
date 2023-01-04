const express = require("express");
const productRoute = express.Router();
const mysql = require("mysql2");

const dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_js_test"
  });

  const table = 'product';

productRoute.get('/', (req, res) => {
  dbConnect.connect();
  const sql = `SELECT * FROM ${table}`
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json(results);
        res.end();
      }
    );
});

productRoute.post('/', (req, res) => {
    dbConnect.connect();
    const {name,price,color,size,material,short_desc,long_desc,thumb,image,category,update_date,stock,active} = req.body;
    const sql = `INSERT INTO ${table} (product_id, product_name, product_price, product_color, product_size, product_material, product_short_desc, product_long_desc, product_thumb, product_image, product_category, product_update_date, product_stock, product_active) 
    VALUES (NULL,'${name}','${price}','${color}','${size}','${material}','${short_desc}','${long_desc}','${thumb}','${image}','${category}','${update_date}','${stock}','${active}')`;
     dbConnect.query(sql, function (err, result) {
        if (err) throw err;
        res.json({"message": "Product Add"});
        res.end();
      });
      dbConnect.end();
});


productRoute.delete('/:id', (req, res) => {
    dbConnect.connect();
    const {id} = req.params;
    const sql = `DELETE FROM ${table} WHERE product_id = '${id}'`;
     dbConnect.query(sql, function (err, result) {
        if (err) throw err;
        res.json({"message": "Product Delete"});
        res.end();
      });
      dbConnect.end();
});

module.exports = productRoute;