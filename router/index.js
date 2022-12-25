const express = require('express');
const router  = express.Router();
const { get, add } = require("../controller/index");
require('dotenv').config(); 

router.get('/:test', get);
router.post('/', add);


module.exports = router;