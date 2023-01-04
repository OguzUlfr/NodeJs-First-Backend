const express = require("express");
const modelRoute = express.Router();
const mysql = require("mysql2");

const dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_js_test"
  });

  const table = 'user'

modelRoute.get('/', async (req, res) => {
  const sql = `SELECT * FROM ${table}`
    dbConnect.query(
      sql,
      function(err, results, fields) {
        
        res.status(200).json(results);
        res.end();
      }
    );
});

modelRoute.post('/', (req, res) => {
    dbConnect.connect();
    const {email, password, firstName, lastName, address, state, city, country, date, phone} = req.body;
    const sql = `INSERT INTO ${table} (user_id, user_email, user_password, user_firstName, user_lastName, user_role, user_address, user_state, user_city, user_country, user_registration_date, user_phone) 
    VALUES (NULL, '${email}', '${password}', '${firstName}', '${lastName}', 0, '${address}', '${state}', '${city}', '${country}', '${date}', '${phone}')`;
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
    const sql = `UPDATE ${table} SET email = '${email}' WHERE user_id = '${id}'`;
     dbConnect.query(sql, function (err, result) {
        if (err) throw err;
        res.json({"message": "User Update"});
        res.end();
      });
      dbConnect.end();
});

modelRoute.delete('/:id', (req, res) => {
    dbConnect.connect();
    const {id} = req.params;
    const sql = `DELETE FROM ${table} WHERE user_id = '${id}'`;
     dbConnect.query(sql, function (err, result) {
        if (err) throw err;
        res.json({"message": "User Delete"});
        res.end();
      });
      dbConnect.end();
});

module.exports = modelRoute;