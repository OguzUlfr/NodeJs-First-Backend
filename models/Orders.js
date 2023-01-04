const express = require("express");
const ordersRoute = express.Router();
const mysql = require("mysql2");

const dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_js_test"
  });

  const table = 'orders'

  ordersRoute.get('/', (req, res) => {
    const sql = `SELECT * FROM ${table}`
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json(results);
        res.end();
      }
    );
});

ordersRoute.post('/', (req, res) => {
    const {user, amount, ship_addres, ship_state, ship_city, ship_country, phone, shipping, email, date} = req.body;
    const sql = `INSERT INTO ${table} (order_id, order_user, order_amount, order_ship_addres, oder_ship_state, order_ship_city, order_ship_country, order_phone, order_shipping, order_email, order_date) VALUES (NULL, '${user}', '${amount}', '${ship_addres}, '${ship_state}', '${ship_city}, '${ship_country}', '${phone}, '${shipping}', '${email}, '${date}'')`;
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json({"message": "Brand Add"});
        res.end();
      }
    );
});


ordersRoute.delete('/:id', (req, res) => {
    const {id} = req.params;
    const sql = `DELETE FROM ${table} WHERE order_id = '${id}'`;
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json({"message": "Brand Add"});
        res.end();
      }
    );
});

module.exports = ordersRoute;