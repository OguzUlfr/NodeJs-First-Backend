const { List, Add } = require('../models/CityModels.js');
require("dotenv").config();


const get = (req,res) => {
  List(req,res);
}


const add = (req,res) => {
  Add(req,res);
}


module.exports = {  get, add };