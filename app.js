const express = require("express");
const router = require("./router/index.js");
require('dotenv').config();

const app = express();

const port = 3004;

app.use(express.json());

app.use('/', router);

app.listen(port, () => {
    console.log(`Server Starting port ${port}`);
});
