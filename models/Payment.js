const express = require("express");
const paymentRoute = express.Router();
const mysql = require("mysql2");

const dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_js_test"
  });

  const table = 'payment'

  paymentRoute.get('/', (req, res) => {
    const sql = `SELECT * FROM ${table}`
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json(results);
        res.end();
      }
    );
});

paymentRoute.post('/', (req, res) => {
    const {userID, name, number, date, cvv} = req.body;
    const sql = `INSERT INTO ${table} (payment_user_id, payment_name,	payment_number,	payment_date, payment_cvv) VALUES ('${userID}', '${name}', '${number}, '${date}', '${cvv}')`;
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json({"message": "Brand Add"});
        res.end();
      }
    );
});


paymentRoute.delete('/:id', (req, res) => {
    const {id} = req.params;
    const sql = `DELETE FROM ${table} WHERE payment_user_id = '${id}'`;
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json({"message": "Brand Add"});
        res.end();
      }
    );
});

module.exports = paymentRoute;